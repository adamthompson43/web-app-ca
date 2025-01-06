# Assignment 2 - Web API.

Name: Adam Thompson

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Modified authentification from labs to only allow users to see favourites and playlist pages 
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


______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
