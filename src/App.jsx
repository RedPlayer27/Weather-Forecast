import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarCustom from "./Components/Navbar.jsx";
import WeatherCard from "./Components/WeatherCard.jsx";
import Footer from "./Components/Footer.jsx";
import Forecast from "./Components/Forecast.jsx";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
  if (!city) return;

  try {
    const apiKey = "f3ad69a4c67ea88a6c2458d2213ab87c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    setWeatherData(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("Unable to fetch weather data. Please check the city name and try again.");
  }
};

const weatherType = weatherData?.weather?.[0]?.main?.toLowerCase();

const backgroundClass = weatherType?.includes("rain")
  ? "rainy"
  : weatherType?.includes("cloud")
  ? "cloudy"
  : weatherType?.includes("clear")
  ? "clear"
  : "default";


  return (
    <div className={`app-container ${backgroundClass}`}>
      <NavbarCustom city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <main className="container text-center py-4">
        {weatherData ? (
          <>
            <WeatherCard data={weatherData} />
            <Forecast city={city} />
          </>
        ) : (
          <p className="text-muted mt-5">Search for a city to view weather</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

