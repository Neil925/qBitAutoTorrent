import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import Error from './pages/error/error';
import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import AxiosService from './services/axios';
import Cookies from 'js-cookie';
import Config from './config';

export default function App() {
  AxiosService.setUp(window.location.origin);

  var cookie = Cookies.get('QBIT-LOGIN');
  const login = (cookie !== undefined) || Config.loginOverride;

  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={login ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auto" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}