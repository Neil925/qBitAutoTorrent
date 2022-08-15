import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Error from './pages/error/error';
import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { withCookies } from 'react-cookie';
import AxiosService from './services/axios';
import Cookies from 'js-cookie';

class App extends React.Component {
  render() {
    AxiosService.setUp(window.location.origin);

    var cookie = Cookies.get('QBIT-LOGIN');
    const login = cookie !== undefined;

    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={login ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default withCookies(App);