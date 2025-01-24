const apiKey = '4789e0b46fb70d206f1fa92cf7890df7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const errorMessageContainer = document.getElementById('errorMessageContainer');

// Fetch weather data
const fetchWeather = async (location) => {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        updateWeatherInfo(data);
        clearError();
    } catch (error) {
        showError(error.message || 'Something went wrong');
    }
};

// Update weather info on the page
const updateWeatherInfo = ({ name, main, weather }) => {
    locationElement.textContent = name;
    temperatureElement.textContent = `${Math.round(main.temp)}°C`;
    descriptionElement.textContent = weather[0].description;
};

// Show error message
const showError = (message) => {
    errorMessageContainer.textContent = message;
};

// Clear error message
const clearError = () => {
    errorMessageContainer.textContent = '';
};

// Search button click event
searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) fetchWeather(location);
});
