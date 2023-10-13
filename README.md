# Netflix-Gpt

It is a Netflix like movie suggestion web app built using ```react``` & ```firebase```. This web app has been integrated with ```openai``` chatGpt apis which will power up the web app with extra search & recommendation features.


## Features 
- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - responsive header
  - featured movie with trailer & description on loop mode
  - movie suggestions based on categories 
    - movieLists * N (category wise)
    - each category will be fetched from ```TMDB``` api's
- NetflixGPT
  - search Bar
  - movie Suggestions based on the search query using ```openai``` apis

## Deployment

The web app is hosted using Google-firebase, please have a look at https://netflixgpt-bc29d.web.app


## For Dev Mode 

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


