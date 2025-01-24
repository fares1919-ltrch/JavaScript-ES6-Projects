# Weather App Documentation

## Introduction

The Weather App is a simple, user-friendly application that allows users to search for the current weather conditions of any city. It fetches data from the OpenWeatherMap API and displays the location name, temperature, and weather description.

---

## Features

1. **Real-Time Weather Data**: Users can input the name of a city to fetch the latest weather information.
2. **Responsive Design**: The app is designed to be responsive and works seamlessly on desktop and mobile devices.
3. **Error Handling**: Displays a clear error message if the city is not found or an issue occurs during the API call.
4. **Interactive UI**: Modern, clean design with hover and active effects for buttons and transitions for enhanced user experience.

---

## Technologies Used

- **HTML5**: Structure of the application.
- **CSS3**: Styling and responsive design.
- **JavaScript (ES6+)**: Logic for fetching and displaying weather data.
- **OpenWeatherMap API**: Source for weather information.

---

## Project Structure

```
project/
|-- index.html    // Main HTML file
|-- styles.css    // Stylesheet for the app
|-- script.js     // JavaScript logic for the app
|-- bg.jpg        // Background image for styling
|-- logo.avif     // Favicon for the app

```

---

## How It Works

### 1. HTML Structure

- The app has a container with an input field for city names, a search button, and a section to display weather information.
- An error message container is included to handle invalid inputs or API errors.

### 2. CSS Styling

- **Reset and Global Styles**: Ensures consistent appearance across browsers.
- **Container Styling**: Provides a centered, visually appealing layout with a transparent background and subtle shadow effects.
- **Interactive Elements**: Buttons and inputs have hover and active effects for a better user experience.
- **Responsive Design**: Media queries ensure proper scaling for devices of all sizes.

### 3. JavaScript Logic

- **API Integration**: Fetches data from the OpenWeatherMap API using the provided API key.
- **Dynamic Content Update**: Updates the DOM with weather details or an error message.
- **Error Handling**: Gracefully handles errors, such as invalid city names or network issues.

---

## Code Explanation

### JavaScript

### API URL and Key

```jsx
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

```

Replace `YOUR_API_KEY` with your OpenWeatherMap API key.

### Event Listener

```jsx
searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

```

Attaches a click event listener to the search button, triggering the `fetchWeather` function when clicked.

### Fetch Weather Function

```jsx
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            errorMessageContainer.textContent = '';
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            errorMessageContainer.textContent = 'City not found. Please try again!';
        });
}

```

Fetches weather data from the API, updates the DOM with the fetched data, and handles errors gracefully.

---

## How to Run

1. Clone or download the project files.
2. Open the `index.html` file in your web browser.
3. Enter a city name in the input field and click the "Search" button.

---

## API Information

- **Base URL**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**:
    - `q`: City name (e.g., "London").
    - `appid`: Your API key.
    - `units`: Set to `metric` for temperature in Celsius.
- **Response Format**: JSON

---

## Enhancements

### Suggestions for Improvement

1. **Geolocation Integration**: Automatically fetch the user's location to display local weather.
2. **Extended Forecast**: Include a 5-day weather forecast.
3. **Dark Mode**: Add a toggle for dark mode.
4. **Animations**: Enhance UI with animations for transitions and loading states.

---

## Author

- **Name**: FARES LATRACH
- **Contact**: FARES.LATRACH20@GMAIL.COM

---

## License

This project is licensed under the MIT License.