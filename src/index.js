import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Notification from './pages/Notification';
// import Login from './pages/Login';
import Trends from './pages/Trends';
import Wallet from './pages/Wallet';
import HeaderBar from './components/HeaderBar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderBar />

      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/main" element={<Main />} />
        <Route path="/main/trends" element={<Trends />} />
        <Route path="/main/wallet" element={<Wallet />} />
        <Route path="/main/notification" element={<Notification />} />
        <Route path="/*" element={<Navigate replace to="/main" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
