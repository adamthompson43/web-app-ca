import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { TextField, Button, Typography, Box, Container, Alert } from '@mui/material';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (!validPassword) {
        setError(
          "Password must be at least 8 characters long and include at least one letter, one number, and one special character."
        );
        return;
      }

    if (password !== passwordAgain) {
        setError("Passwords do not match.");
        return;
    }
    
    setError(""); 
    context.register(userName, password);
    setRegistered(true);
};

  if (registered) {
    return <Navigate to="/login" />;
  }




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
                Sign up
            </Typography>
            <Typography variant="body2" color="textSecondary" marginBottom={2}>
                Sign up for a TMDB Client Account
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

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                id="password"
                label="Type password again"
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
            />

            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={register}
            >
                Sign Up
            </Button>
        </Box>
    </Container>
);
};


export default SignUpPage;
