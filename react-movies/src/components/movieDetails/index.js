import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { getMovieCredits } from "../../api/tmdb-api";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [credits, setCredits] = useState([]) // stores cast data

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getMovieCredits(movie.id); 
        setCredits(data.cast.slice(0, 10)); // limit to 10 cast members to save space
      } catch (error) {
        console.error("Error fetching credits:", error);
      }
    };
    fetchCredits();
  }, [movie.id]);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>



      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} 
        label={`${movie.runtime} min.`} 
        />
        <Chip
          icon={<PointOfSaleIcon />}
          label={`${movie.budget.toLocaleString()}`}
        />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Production Countries" sx ={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Cast" sx={{...chip}} color="primary" />
        </li>
        {credits.map((castMember) => (
          <li key={castMember.id}>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(castMember.name)}`} // link to google seach of cast member
              target="_blank"
              rel="noopener norefferer"
              style={{ textDecoration: "none" }} // removed the underline from hyperlink
              >
            <Chip 
              label={castMember.name} 
              sx={{...chip}} 
              variant="outlined" 
              clickable
            />
            </a>
          </li>
        ))}
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;