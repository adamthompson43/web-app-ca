import React, { useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import Pagination from "@mui/material/Pagination";


const UpcomingMoviesPage = (props) => {

const [currentPage, setCurrentPage] = useState(1)

  const {  data, error, isLoading, isError }  = useQuery(
    ['upcomingMovies',currentPage],
    () => getUpcomingMovies(currentPage),
    { keepPreviousData: true}
  )
  

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlist = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlist))
  const addToPlaylist = (movieId) => true 

  const handlePageChange = (event, page) =>
    setCurrentPage(page);

  return (
    <div>
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => <AddToPlaylistIcon movie={movie} />}
      />

      <Pagination
        count={data.total_pages} 
        page={currentPage} 
        onChange={handlePageChange} 
        color="primary"
        sx={{
          mt: 4, 
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default UpcomingMoviesPage;