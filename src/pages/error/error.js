// import React, {useState} from "react";
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./error.scss";

class Error404 extends Component {
  render() {
    return (
      <div className="error">
        <Card className="error text-center">
          <Card.Header>Error 404</Card.Header>
          <Card.Body>
            <Card.Title>You did the big funny!</Card.Title>
          </Card.Body>
          <Button variant="primary">Go back to homepage!</Button>
        </Card>
      </div>
    );
  }
}

export default Error404;