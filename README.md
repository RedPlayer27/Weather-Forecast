🌦️ WeatherNow — React Weather Forecast App

WeatherNow is a modern, responsive weather application built using React, Bootstrap 5, JavaScript (ES6), and the OpenWeatherMap API.
Users can search any city in the world and instantly get:

Current temperature

Weather condition & icon

Humidity

Wind speed

Pressure

Feels like temperature

5-day forecast

The UI is designed with a clean, minimalistic layout and smooth gradients. It is fully responsive across devices including mobile (320–425px), tablets (768px), and desktops (1024–1440px).

🚀 Features

Real-time weather data

Search by city

Dynamic OpenWeather icons

Mobile-first responsive design

5-day forecast with daily summary cards

Smooth fade-in animations

Modern glass-style interface

Built with React Components

📦 Tech Stack

Frontend

React.js (19 / 18 supported)

JavaScript (ES6+)

Bootstrap 5

React-Bootstrap

CSS3 with responsive breakpoints

API

OpenWeatherMap JSON API
https://openweathermap.org/api

🗂️ Project Structure
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── WeatherCard.jsx
 │    ├── Forecast.jsx
 │    └── Footer.jsx
 │
 ├── App.jsx
 ├── App.css
 └── index.jsx

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/YOUR_USERNAME/WeatherNow.git
cd WeatherNow


Install dependencies:

npm install


Start the development server:

npm run dev

🔑 API Key Setup (IMPORTANT)

This project requires an OpenWeatherMap API Key.

Create a free account at
https://home.openweathermap.org/users/sign_up

Generate an API key

Insert your key inside App.jsx (or environment file)

Example:

const apiKey = "YOUR_API_KEY_HERE";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

⚠️ Your application will not work without inserting your own API key.
📱 Responsive Design

This UI is fully optimized for:

Mobile S — 320px

Mobile M — 375px

Mobile L — 425px

Tablet — 768px

Laptop — 1024px

Laptop L — 1440px

All components auto-adjust layout, spacing, and typography based on your screen size.

📸 Screenshots (optional)

(Add your screenshots here)

🧩 Build for Production
npm run build


This generates a production-ready /dist folder.

🌍 Deployment

You can deploy WeatherNow easily using platforms like:

Netlify

Vercel

GitHub Pages

Render



🤝 Contributing

Pull requests are welcome!
Feel free to open issues for improvements or bugs.

📜 License

This project is open-source and available under the MIT License.
