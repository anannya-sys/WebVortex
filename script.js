document.getElementById('getWeather').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '5f997c0f550ee6f86aa56a702cadc3b8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}
