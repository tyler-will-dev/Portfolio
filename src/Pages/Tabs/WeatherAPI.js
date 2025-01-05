import React, { useState } from 'react';
import styles from './WeatherAPI.module.css';

function WeatherAPI() {
    const [cityInput, setCityInput] = useState('Austin');
    const [queryCity, setQueryCity] = useState('Austin');
    const [weatherData, setWeatherData] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const API_KEY = 'c9909028e67d3809bb35550858571136';

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
            );
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        setQueryCity(cityInput);
        fetchWeather(cityInput);
    };

    return (
        <div className={styles.weatherContainer}>
            <h2>Weather Information</h2>
            <input
                type="text"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                placeholder="Enter city"
                className={styles.cityInput}
            />
            <button onClick={handleSearch} className={styles.fetchButton}>
                Fetch Weather
            </button>

            {loading && <p>Loading...</p>}
            {error && <p className={styles.error}>Error: {error}</p>}
            {weatherData && (
                <div className={styles.weatherInfo}>
                    <h3>{weatherData.name}</h3>
                    <p>Temperature: {weatherData.main.temp}°F</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Conditions: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherAPI;
