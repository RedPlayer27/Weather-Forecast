import React from "react";
import { Card } from "react-bootstrap";

export default function WeatherCard({ data }) {
  const { name, sys, main, weather, wind } = data;
 const iconUrl = data.weather && data.weather[0]
  ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  : null;

  {iconUrl && <img src={iconUrl} alt={data.weather[0].description} className="weather-icon" />}


  return (
    <Card className="weather-card mx-auto mt-5 shadow-lg">
      <Card.Body>
        <h3>{name}, {sys.country}</h3>
        <img src={iconUrl} alt={weather[0].description} />
        <h1>{Math.round(main.temp)}°C</h1>
        <p className="text-capitalize">{weather[0].description}</p>
        <div className="weather-details mt-3">
          <div>💧 Humidity: {main.humidity}%</div>
          <div>🌬️ Wind: {wind.speed} km/h</div>
          <div>🔽 Pressure: {main.pressure} hPa</div>
          <div>🌡️ Feels like: {Math.round(main.feels_like)}°C</div>
        </div>
      </Card.Body>
    </Card>
  );
}
