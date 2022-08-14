import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login/login';
import Error from './pages/error/error';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

const login = false;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={login ? <App /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
