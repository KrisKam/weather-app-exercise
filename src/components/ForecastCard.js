import React from "react";
import { Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';
import { toFahrenheit } from "../utils/conversions";
import "./Forecast.css";


const ForecastCard = (props) => {

  const date = new Date(props.dailyWeather.applicable_date).toDateString().split(" ");
  const hi = toFahrenheit(props.dailyWeather.max_temp);
  const lo = toFahrenheit(props.dailyWeather.min_temp);
  const description = props.dailyWeather.weather_state_name;

  return (
    <Card className="text-center ForecastCard-card"> 
      <CardImg top width="50%" src={require(`./images/${props.imageCode}.png`)} alt={description} />
      <CardBody>
        <CardTitle>{date[0]} {date[1]} {date[2]}</CardTitle>
        <CardSubtitle>{hi}&deg; | {lo}&deg; F</CardSubtitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
}

export default ForecastCard;