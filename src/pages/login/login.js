import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import AxiosService from "../../services/axios";
import { useNavigate } from "react-router-dom";

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


  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    let response = await AxiosService.sendLogin(this.state);

    if (response.data.includes("Ok.")) {
      this.props.navigation('/');
    }
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

export default function (props) {
  const navigation = useNavigate();

  return <Login {...props} navigation={navigation} />;
}