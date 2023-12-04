const URL = `http://api.weather.gov/gridpoints/ALY/110,79/forecast`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data.properties);
    const currentForecast = data.properties.periods[0];
    const { name, temperature, windSpeed, shortForecast, detailedForecast } = currentForecast;

    const laterForecast = data.properties.periods[1];

    const weather = document.querySelector('#forecast');
    weather.innerHTML = `
      <h3>${name}</h3>
      <p>${temperature}°F Wind: ${windSpeed}</p>
      <p>${shortForecast}</p>
      <p>${detailedForecast}</p>
      <h3>${laterForecast.name}</h3>
        <p>${laterForecast.temperature}°F Wind: ${laterForecast.windSpeed}</p>
        <p>${laterForecast.shortForecast}</p>
        <p>${laterForecast.detailedForecast}</p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
  });
