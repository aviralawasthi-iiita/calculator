
const API_KEY = "9772acf37269a0ceee8ad4452ec666aa"; 

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#search").addEventListener("click", fetchWeather);
});

async function fetchWeather() {
    let city = document.querySelector("#city").value.trim();

    if (city === "") {
        displayError("Please enter a city name.");
        return;
    }

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error("City not found. Please enter a valid city.");
        }

        let data = await response.json();
        displayWeather(data);
    } catch (error) {
        displayError(error.message);
    }
}

function displayWeather(data) {
    let weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    `;
    document.querySelector("#weather-info").innerHTML = weatherHTML;
}

function displayError(message) {
    document.querySelector("#weather-info").innerHTML = `<p style="color: red;">${message}</p>`;
}
