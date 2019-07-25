import React from "react";
import { Container, Row, Col } from "reactstrap";
import { toFahrenheit } from "../utils/conversions";


const Today = ({ weather }) => {

  const { humidity, the_temp, weather_state_name } = weather.consolidated_weather[0];
  const { title } = weather;
  const parentTitle = weather.parent.title;
  const air_pressure = Math.round(weather.consolidated_weather[0].air_pressure)
  const currentTemp = toFahrenheit(the_temp);
 
  return (
    <Container className="text-white">
      <Row className="align-items-center">
        <Col md="5" sm="6">
          <Row className="h3">{title}, {parentTitle}</Row>
        </Col>
        <Col md="7" sm="6">
          <Row>{currentTemp}&deg; {weather_state_name}</Row>
          <Row>Humidity:  {humidity}</Row>
          <Row>Air Pressure:  {air_pressure}</Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Today;