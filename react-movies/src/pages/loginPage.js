import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Box, Container, Alert } from '@mui/material';

const LoginPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // if login fails an error is set to be displayed using mui
    const login = async () => {  
        try {
            const isAuthenticated = await context.authenticate(userName, password);  
            if (!isAuthenticated) {
                setError("Incorrect username or password.");
            }
        } catch (err) {
            setError("An error has occurred");
        }
    };
    

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    // login page using mui with error handling
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8,
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: '#fff',
                }}
            >
                <Typography component="h1" variant="h5" gutterBottom>
                    Login
                </Typography>
                <Typography variant="body2" color="textSecondary" marginBottom={2}>
                    Log in with your TMDB Client Account
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ width: "100%", marginBottom: 2}}>
                        {error}
                    </Alert>
                )}

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={login}
                >
                    Log in
                </Button>

                <Typography variant="body2" align="center" marginTop={2}>
                    Not registered?{' '}
                    <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}> 
                        Sign Up!
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default LoginPage;
