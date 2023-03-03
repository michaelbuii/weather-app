import React from 'react'

const CurrentWeather = ({logo, weatherCode, temperature}) => {
  return (
    <section className="current-weather">
        <div className="current-weather-stat">
          <p className="current-weather-title">Current Weather</p>
          <p className="current-weather-degree">{temperature}°C</p>
          <p className="current-weather-condition">{weatherCode}</p>
        </div>
        <div className="current-weather-img">
          <img src={logo} alt="sun" />
        </div>
    </section>
  )
}

export default CurrentWeather