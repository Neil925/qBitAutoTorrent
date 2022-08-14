// import React, {useState} from "react";
import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import "./error.css";

class Error404 extends Component {
  render() {
    return (
      <div className="Error" >
      <header className="Error-header">
      <Alert variant="success">
      <Alert.Heading><h1>Error 404!</h1>
      </Alert.Heading>
      </Alert>
      </header>
      <body className="below">
      <p>
      <nav
            style={{
              borderBottom: "solid 3px",
              paddingBottom: "-5",
            }}
          >
          </nav>
       </p>
       <b>Go back you normie!</b>
       </body>
    </div>
    );
  }
}

export default Error404;