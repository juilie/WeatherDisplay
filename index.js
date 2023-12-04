const URL = `https://api.weather.gov/gridpoints/ALY/110,79/forecast`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data.properties);
    let forecast = data.properties.periods[0];
    const { name, temperature, windSpeed, windDirection, shortForecast, detailedForecast } = forecast;
    const weather = document.querySelector('#forecast');
    weather.innerHTML = `
      <h3>${name}</h3>
      <p>${temperature} ${windSpeed} ${windDirection}</p>
      <p>${shortForecast}</p>
      <p>${detailedForecast}</p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
  });
