import React, { useState } from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";


const TopRatedMoviesPage = (props) => {

  const [currentPage, setCurrentPage] = useState(1)

  const {  data, error, isLoading, isError }  = useQuery(
    ['topRatedMovies', currentPage],
     () => getTopRatedMovies(currentPage),
     { keepPreviousData: true }
    )

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results.map((movie, index) => ({
    ...movie,
    rank: index + 1 + (currentPage - 1) * 20, // sets rank of movie, added workaround to movie showing wrong rank when not on page 1
  }));

  const handlePageChange = (event, page) =>
    setCurrentPage(page);
  

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <div>
      <PageTemplate
        title="Top Rated Movies"
        movies={movies}
        action={(movie) => {
          return (
            <>
              <div>
                <Typography>Rank #{movie.rank}</Typography>
              </div>
              <AddToFavoritesIcon movie={movie} />
            </>
          );
        }}
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
  

export default TopRatedMoviesPage;