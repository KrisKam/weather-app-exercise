import React from "react";
import { Container } from "reactstrap";
import "./Forecast.css";
import Forecast from "./Forecast";
import Today from "./Today";


const CurrentWeather = ({ weather }) => {

  if (!weather) {
    return null;
  }

  return (
    <Container className="CurrentWeather-container bg-dark">
      <Today weather={weather}/>
      <Forecast weather={weather}/>
    </Container>
  )
}

export default CurrentWeather;