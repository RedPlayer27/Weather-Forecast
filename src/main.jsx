import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//WebBuilder12////
///f3ad69a4c67ea88a6c2458d2213ab87c
///https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
