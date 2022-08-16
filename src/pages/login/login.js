import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./login.scss";
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
    let response = await AxiosService.Login(this.state);

    if (response.data.includes("Ok.")) {
      this.props.navigation("/");
    }
  };

  render() {
    return (
      <div className="main justify-content-center">
        <Card className="center tester" style={{ width: "25rem", height: "23rem"}}>
          <Card.Header>
            <b>BitAutoTorrent</b>
          </Card.Header>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label><b>Username</b></Form.Label>
                <Form.Control type="text" placeholder="username" name="username" onChange={this.onChange} />
              </Form.Group>
              <br></br>
              <Form.Group className="mb-3">
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control type="password" placeholder="password" name="password" onChange={this.onChange} />
              </Form.Group>
              <br></br>
              <Button variant="primary" type="submit" style={{ width: "10rem", height: "3rem"}}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

// eslint-disable-next-line
export default function (props) {
  const navigation = useNavigate();

  return <Login {...props} navigation={navigation} />;
}
