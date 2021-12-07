import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SimpleProfile from './SimpleProfile';

const Button = styled.span`
  color: blue;
  font-size: 18px;
  font-family: 'Roboto';
`;

export default function LeftBar() {
  return (
    <Grid item md={3}>
      <Grid container>
        <Grid item md={12}>
          <SimpleProfile />
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
