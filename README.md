# Assignment 2 - Web API.

Name: Adam Thompson

## Features.

 + Modified authentification from labs to only allow users to see favourites and playlist pages 
 + Added favourites and playlist pages to protected routes, only allowing users to access them
 + Added error handling to sign in and login screens (e.g wrong password, incorrect confirm password on sign up) 
 + Used Materials UI to make new login and sign up pages
 + Added endpoints for popular and top rated movies
 + Created login/logout buttons for site header along with showing current user

## Setup requirements.

1. Install MongoDB and Node.js
2. Clone repository from https://github.com/adamthompson43/wad-api-labs-2024.git
3. Create .env file in react-movies and movies-api directories
4. Run "npm install" and "npm start" in react-movies directory

## API Configuration

1. Add "REACT_APP_TMDB_KEY=your_tmdb_key" to /react-movies/.env
2. Add the following to /movies-api/.env

______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=your_mongodb_url
TMDB_KEY=your_tmdb_key
SECRET=your_jwt_secret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 



## Security and Authentication

+ Favourites and Playlist pages are protected from non-users, leading them to the login page
+ Passwords are encrypted 
+ Passwords must be 8 characters with one upper case, one number, and one special character




