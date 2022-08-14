import './App.css';
import { Link } from "react-router-dom";
import React from 'react';
import { withCookies } from 'react-cookie';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>qBitAutoTorrent Main Page</h1>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/login">login</Link> |{" "}
            <Link to="/auto">Auto Torrent</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default withCookies(App);