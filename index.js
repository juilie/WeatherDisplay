const GRID_POINTS = "ALY/110,79";

const URL = `https://api.weather.gov/gridpoints/${GRID_POINTS}/forecast`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data.properties);
  })
  .catch(error => {
    console.error('Error:', error);
  });
