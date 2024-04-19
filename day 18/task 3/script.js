document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '1be5992ac4f09f93c2d92dbc276ef630';
    const weatherContainer = document.getElementById('weather-container');
    const cityForm = document.getElementById('city-form');
    const cityInput = document.getElementById('city-input');

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            weatherContainer.innerHTML = weatherInfo;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherContainer.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        }
    };

    cityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            fetchWeatherData(city);
            cityInput.value = ''; // Clear input field after submission
        } else {
            alert('Please enter a city.');
        }
    });
});
