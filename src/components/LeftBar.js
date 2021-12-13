import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Wallet from './Wallet';
import SimpleProfile from './SimpleProfile';

const Button = styled.span`
  color: blue;
  font-size: 18px;
  font-family: 'Roboto';
`;

export default function LeftBar() {
  const { data } = useSelector(
    (state) => state.account.account,
  );

  return (
    <Grid item md={3}>
      <Grid container>
        <Grid item md={12}>
          {data ? <SimpleProfile /> : <Wallet />}
        </Grid>
        <Grid item md={1} />
        <Grid item md={11}>
          <Grid container rowSpacing={3}>
            <Grid item md={12}>
              <Button variant="text">
                <Link to="/main" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </Button>
            </Grid>
            <Grid item md={12}>
              <Button variant="text">Create</Button>
            </Grid>
            <Grid item md={12}>
              <Button variant="text">
                <Link to="/main/trends" style={{ textDecoration: 'none' }}>
                  Trends
                </Link>
              </Button>
            </Grid>
            <Grid item md={12} />
            <Grid item md={12}>
              <Button variant="text">
                <Link to="/main/profile" state={{data}} style={{ textDecoration: 'none' }}>
                  Profile
                </Link>
              </Button>
            </Grid>
            <Grid item md={12}>
              <Button variant="text">
                <Link to="/main/wallet" style={{ textDecoration: 'none' }}>
                  Wallet
                </Link>
              </Button>
            </Grid>
            <Grid item md={12}>
              <Button variant="text">
                <Link
                  to="/main/notification"
                  style={{ textDecoration: 'none' }}
                >
                  Notification
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
