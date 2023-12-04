const URL = `https://api.weather.gov/gridpoints/ALY/110,79/forecast`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data.properties);
  })
  .catch(error => {
    console.error('Error:', error);
  });
