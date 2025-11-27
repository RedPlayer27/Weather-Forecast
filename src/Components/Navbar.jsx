// Navbar.jsx (or where your search lives)
import React from "react";
import { Form, Button } from "react-bootstrap";

export default function NavbarCustom({ city, setCity, fetchWeather }) {
  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // call the same fetchWeather function from props
    fetchWeather();
  };

  return (
    <header className="navbar-custom">
  <div className="nav-inner">
    <div className="navbar-brand">WeatherNow</div>

    <Form className="search-form" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="me-2 search-input"
        aria-label="Search city"
      />

      <Button variant="light" type="submit" className="search-btn">
        Search
      </Button>
    </Form>
  </div>
</header>

  );
}
