import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const apiKey = "";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      // const apiKey = "f3ad69a4c67ea88a6c2458d2213ab87c";
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
     // Your API key is: 4427d0b64da4423faa108b2eebbea6b6 news api key
      const response = await fetch(url);
      const data = await response.json();
      const daily = data.list.filter((_, idx) => idx % 8 === 0);
      setForecastData(daily);
    };
    fetchForecast();
  }, [city]);

  return (
    <section className="forecast-section mt-5">
      <h4 className="mb-4">5-Day Forecast</h4>
      <Row className="justify-content-center">
        {forecastData.map((day, i) => (
          <Col key={i} xs={6} md={2} className="mb-3">
            <Card className="forecast-card shadow-sm">
              <Card.Body>
                <p>{new Date(day.dt_txt).toLocaleDateString("en-GB", { weekday: "short" })}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].main}
                />
                <p>{Math.round(day.main.temp_min)}°C / {Math.round(day.main.temp_max)}°C</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

