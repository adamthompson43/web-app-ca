import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Pagination from "@mui/material/Pagination";


const HomePage = (props) => {

  const [currentPage, setCurrentPage] = useState(1);

  const {  data, error, isLoading, isError }  = useQuery(
    ['discover', currentPage], // passes current page as part of query key
    () => getMovies(currentPage),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  const handlePageChange = (event, page) =>
    setCurrentPage(page);

  return (
    <div>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
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

export default HomePage;
