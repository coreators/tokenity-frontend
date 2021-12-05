import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Notification from './pages/Notification';
import Login from './pages/Login';
import Trends from './pages/Trends';
import Wallet from './pages/Wallet';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/*" element={<Navigate replace to="/main" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
