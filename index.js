const express = require('express');
const axios = require('axios');
const path = require('path');
const {
  log
} = require('console');

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Example API endpoint
const apiUrl = 'http://api.weather.gov/gridpoints/ALY/110,79/forecast';

// Render the index.ejs template with weather data
app.get('/', async (req, res) => {
  try {
    // Make an Axios request to fetch weather data
    const response = await axios.get(apiUrl);
    const data = response.data;
    const currentForecast = data.properties.periods[0];
    const {
      name,
      temperature,
      windSpeed,
      shortForecast,
      detailedForecast
    } = currentForecast;

    const laterForecast = data.properties.periods[1];

    // Render the index.ejs template with weather data
    res.render('index', {
      temperature,
      name,
      windSpeed,
      shortForecast,
      detailedForecast,
      laterForecast
    });
  } catch (error) {
    console.error('Error fetching weather:', error.message);
    // Handle errors gracefully, render an error page, or redirect
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});