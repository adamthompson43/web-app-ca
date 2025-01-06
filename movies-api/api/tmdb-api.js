import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getTopRatedMovies = async (page = 1) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
        );

        if (!response.ok) {
            const errorData = await response.json(); // Wait for the JSON error response
            throw new Error(errorData.message || 'Failed to fetch top-rated movies');
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching top-rated movies:", error);
        throw error;
    }
};

export const getPopularMovies = async (page = 1) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
        );

        if (!response.ok) {
            const errorData = await response.json(); // Wait for the JSON error response
            throw new Error(errorData.message || 'Failed to fetch popular movies');
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
};

