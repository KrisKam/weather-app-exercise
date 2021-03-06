import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./StartPage.css";
import sun from "../components/images/c.png";

const StartPage = () => {

  return (
    <Jumbotron fluid>
      <Container fluid className="StartPage-container">
        <h1 className="display-3">Find your weather</h1>
        <p className="lead font-weight-bold">
          It's always 
          <br className="StartPage-line-break"/>
          <img className="StartPage-img" src={sun} alt="sunny"/> 
          <br className="StartPage-line-break"/>
          in Denver.</p>
      </Container>
    </Jumbotron>
  )
}

export default StartPage;