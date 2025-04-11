import { useState } from "react";

export default function Projects() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const apiKey = "70509c7705d7b3fcb4f99bd7ad6378ab";

    const getWeather = async () => {
        if (!city) {
            setError("Please enter a city name.");
            return;
        }
        setError(""); // Clear previous errors
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            if (!response.ok) {
                throw new Error("City not found.");
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        }
    };

    return (
        <div className="hero bg-[var(--background-color)] dark:bg-[var(--dark-background-color)] py-12">
            <div className="m-8 mx-auto max-w-[600px] text-center">
                <h1 className="text-3xl font-bold text-[var(--primary-text-color)] dark:text-[var(--dark-primary-text-color)] mb-4">
                    Weather Finder
                </h1>
                <p className="text-[var(--secondary-text-color)] dark:text-[var(--dark-secondary-text-color)] mb-6">
                    Enter a city name to get the current weather information.
                </p>
                <div className="flex justify-center items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="px-4 py-2 border border-[var(--primary-border-color)] rounded-lg bg-[var(--surface)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                    />
                    <button
                        onClick={getWeather}
                        className="px-4 py-2 bg-[var(--primary-button)] text-[var(--primary-button-text)] rounded-lg hover:bg-[var(--primary-button-hover)] transition-colors duration-300"
                    >
                        Get Weather
                    </button>
                </div>
                {error && (
                    <p className="text-[var(--error)] font-medium mb-4">{error}</p>
                )}
                {weatherData && (
                    <div className="weather-info bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-[var(--primary-text-color)] dark:text-[var(--dark-primary-text-color)] mb-2">
                            {weatherData.name}, {weatherData.sys.country}
                        </h2>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold">Temperature</span>
                                <span className="text-2xl">{weatherData.main.temp}°C</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold">Humidity</span>
                                <span className="text-2xl">{weatherData.main.humidity}%</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold">Wind Speed</span>
                                <span className="text-2xl">{weatherData.wind.speed} m/s</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-semibold">Condition</span>
                            <span className="text-2xl capitalize">{weatherData.weather[0].description}</span>
                        </div>
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                            alt="Weather Icon"
                            className="mt-2 flex flex-col items-center"
                        />
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
}
