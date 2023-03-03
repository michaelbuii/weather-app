import React from "react";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import sunLogo from './images/0.svg'
import cloudLogo from './images/1.svg'
import snowLogo from './images/2.svg'
import fogLogo from './images/4.svg'
import drizzleLogo from './images/5.svg'
import rainLogo from './images/5.svg'
import mixedLogo from './images/7.svg'
import heavyRainLogo from './images/8.svg'
import thunderLogo from './images/9.svg'
import CurrentWeather from "./Components/CurrentWeather";


const today = new Date()
const endDate = new Date()
endDate.setDate(today.getDate()+7)

const dateBuilder = (date) =>{
  const dateMap = new Map()
  dateMap.set('year', date.getFullYear())
  dateMap.set('month', String(date.getMonth()).padStart(2,'0'))
  dateMap.set('day',String(date.getDate()).padStart(2,'0'))
  return `${dateMap.get('year')}-${dateMap.get('month')}-${dateMap.get('day')}`
}

const weatherCodes = {
  "0": {
    logo: sunLogo,
    weather: "Sunny"
  },
  "1": {
    logo: cloudLogo,
    weather: "Cloudy"
  },
  "2":{
    logo: snowLogo,
    weather: "Snowing"
  },
  "3": {
    logo: snowLogo,
    weather: "Snowing"
  },
  "4": {
    logo: fogLogo,
    weather: "Foggy"
  },
  "5": {
    logo: drizzleLogo,
    weather: "Light Rain"
  },
  "6": {
    logo: rainLogo,
    weather: "Rainy"
  },
  "7": {
    logo: mixedLogo,
    weather: "Mixed Precipitation"
  },
  "8": {
    logo: heavyRainLogo,
    weather: "Heavy Rainfall"
  },
  "9": {
    logo: thunderLogo,
    weather: "Thunderstorm"
  },
}

function App() {
  const [location, setLocation] = useState('Surrey, BC, Canada')
  const [currWeatherCode, setWeatherCode] = useState('0')
  const [temperature, setTemperature] = useState(20)

  //defaults
  const baseUrl = 'https://api.open-meteo.com/v1/forecast?'
  const params = new Map([
    ['latitude', '49.11'],
    ['longitude', '122.83'],
    ['info', "&hourly=temperature_2m,weathercode&daily=weathercode&current_weather=true&timezone=America%2FLos_Angeles&"],
    ['startDate', dateBuilder(today)],
    ['endDate', dateBuilder(endDate)]
  ])
  const [urlParams, setParams] = useState(params)

  const url = `${baseUrl}latitude=${urlParams.get('latitude')}&longitude=${urlParams.get('longitude')}${urlParams.get('info')}start_date=${urlParams.get('startDate')}&end_date=${urlParams.get('endDate')}`
  

  const handleLocation = (place) => {
    setLocation(place.formatted_address)
    setParams(params.set('latitude',String(place.geometry.location.lat())))
    setParams(params.set('longitude',String(place.geometry.location.lng())))
  }

  useEffect(() => {
    const fetchWeather = async  () => {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setWeatherCode(parseInt(data.current_weather.weathercode.toString()[0]))
      setTemperature(Math.floor(data.current_weather.temperature))
    }
    fetchWeather()
  }, [handleLocation])

  return (
    <div className="App">
      <Header handleLocation = {handleLocation} location = {location}/>
      <CurrentWeather 
      logo = {weatherCodes[currWeatherCode].logo} 
      weatherCode = {weatherCodes[currWeatherCode].weather}
      temperature = {temperature}/>
      <section className="Hourly">Hourly</section>
    </div>
  );
}

export default App;
