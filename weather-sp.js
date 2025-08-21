document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('weatherForm');
  const weatherInfo = document.getElementById('weatherInfo');
  const weatherData = document.getElementById('weatherData');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    fetchWeather(city, country);
  });

  async function fetchWeather(city, country) {
    const apiKey = '2820ae94576e85fb6fe634105ae9731b'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${rayong},${TH}&appid=${2820ae94576e85fb6fe634105ae9731b}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (response.ok) {
        displayWeather(data);
      } else {
        showError(data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      showError('An error occurred. Please try again later.');
    }
  }

  function displayWeather(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherData.innerHTML = `
      <p><strong>Weather:</strong> ${weatherDescription}</p>
      <p><strong>Temperature:</strong> ${temperature}°C</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;

    weatherInfo.style.display = 'block';
  }

  function showError(message) {
    weatherData.innerHTML = `<p class="error">${message}</p>`;
    weatherInfo.style.display = 'block';
  }
});
