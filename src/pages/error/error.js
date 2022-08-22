// import React, {useState} from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./error.scss";
import { useNavigate } from 'react-router';

function Error404() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }
  return(
    <div className="error">
      <Card className="error text-center">
        <Card.Header>Error 404</Card.Header>
        <Card.Body>
          <Card.Title>You did the big funny!</Card.Title>
        </Card.Body>
        <Button variant="primary" onClick={handleClick}>
          Go back to homepage!
        </Button>
      </Card>
    </div>
  );
}

export default Error404;
