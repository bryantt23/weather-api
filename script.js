const weatherButton = document.querySelector('#get-weather');
const cityInput = document.querySelector('#city');
const weatherInfo = document.querySelector('#weather-info');
const API_WEATHER_KEY = 'cbe3a5258849eb31e096fd9bf0763eb8';

weatherButton.addEventListener('click', () => {
  console.log();
  const city = cityInput.value;
  getCityWeather(city);
});

//async await
async function getCityWeather(city) {
  city = city.split(' ').length > 1 ? city.split(' ').join('+') : city;

  const url =
    'http://api.openweathermap.org/data/2.5/weather?APPID=' +
    API_WEATHER_KEY +
    '&q=' +
    city +
    '&units=imperial ';

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  displayWeather(data);
}

function displayWeather(data) {
  const p = document.createElement('p');
  p.textContent = `City: ${data.name}, Temp: ${data.main.temp}, Description: ${data.weather[0].main}`;

  if (weatherInfo.hasChildNodes()) {
    weatherInfo.removeChild(weatherInfo.firstChild);
  }

  weatherInfo.appendChild(p);
}
