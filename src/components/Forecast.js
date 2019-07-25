import React from "react";
import { CardGroup } from 'reactstrap';
import ForecastCard from "./ForecastCard";


const Forecast = ({ weather }) => {

  const cards = weather.consolidated_weather.map(dailyWeather => {
    const imageCode = dailyWeather.weather_state_abbr;
    return <ForecastCard key={dailyWeather.id} dailyWeather={dailyWeather} imageCode={imageCode}/>
  })

  return (
    <CardGroup>
      {cards}
    </CardGroup>
  )
}

export default Forecast;