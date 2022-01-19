import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import Main from './pages/Main';
import Notification from './pages/Notification';
import Login from './pages/Login';
import Trends from './pages/Trends';
import Wallet from './pages/Wallet';
import Header from './components/Header';
import LeftBar from './components/Side/LeftBar';
import RightBar from './components/Side/RightBar';
import Profile from './pages/Profile';
import ProfileUpdate from './pages/ProfileUpdate';

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
`;
const App = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/main"
          element={
            <>
              <Header />
              <Container>
                <Grid container>
                  <LeftBar />
                  <Grid item md={6}>
                    <Outlet />
                  </Grid>
                  <RightBar />
                </Grid>
              </Container>
            </>
          }
        >
          <Route path="/main" element={<Main />} />
          <Route path="/main/profile" element={<Profile />} />
          <Route path="/main/profile/update" element={<ProfileUpdate />} />
          <Route path="/main/trends" element={<Trends />} />
          <Route path="/main/wallet" element={<Wallet />} />
          <Route path="/main/notification" element={<Notification />} />
        </Route>
        <Route path="/*" element={<Navigate replace to="/main" />} />
      </Routes>
  );
};

export default App;