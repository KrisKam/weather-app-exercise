import React from "react";
import { Container } from "reactstrap";
import "./Search.css";

const NoResult = () => {

  return (
    <Container className="NoResult-container">
      <h3>No results, please try again.</h3>
    </Container>
  )
}

export default NoResult;