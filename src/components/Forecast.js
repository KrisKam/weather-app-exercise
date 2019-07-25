import React from "react";
import { CardGroup } from 'reactstrap';
import "./Forecast.css";
import ForecastCard from "./ForecastCard";


const Forecast = ({ weather }) => {

  const cards = weather.consolidated_weather.map(dailyWeather => {
    const imageCode = dailyWeather.weather_state_abbr;
    return <ForecastCard key={dailyWeather.id} dailyWeather={dailyWeather} imageCode={imageCode}/>
  })

  return (
    <CardGroup className="Forecast-cardGroup">
      {cards}
    </CardGroup>
  )
}

export default Forecast;