// import React, {useState} from "react";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
            <div className="main">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>username</Form.Label>
                  <Form.Control type="text" placeholder="username" name="username" onChange={this.onChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" name="password" onChange={this.onChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
    );
  }
}

export default Login;
