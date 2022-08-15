import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Error from './pages/error/error';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { withCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const login = true;

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={login ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default withCookies(App);