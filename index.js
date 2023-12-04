const URL = `https://api.weather.gov/gridpoints/${GRID_POINTS}/forecast`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data.properties);
  })
  .catch(error => {
    console.error('Error:', error);
  });
