// import React, {useState} from "react";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

  };

  render() {
    return (
      <Card className="center tester" style={{ width: '18rem' }}>
      <Card.Header><b>BitAutoTorrent</b></Card.Header>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>username</Form.Label>
            <Form.Control type="text" placeholder="username" name="username" onChange={this.onChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" name="password" onChange={this.onChange} />
          </Form.Group>
          </Form>
        <Button variant="primary" type="submit">Submit</Button>
      </Card.Body>
    </Card>
  );
  }
}

export default Login;
