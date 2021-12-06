import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SimpleProfile from './SimpleProfile';

export default function LeftBar() {
  return (
    <Grid item md={3}>
      <Grid container>
        <Grid item md={12}>
          <SimpleProfile />
        </Grid>
        <Grid item md={12}>
          <Link to="/main">
            <Typography>home</Typography>
          </Link>
        </Grid>
        <Grid item md={12}>
          <Typography>create</Typography>
        </Grid>
        <Grid item md={12}>
          <Link to="/main/trends">
            <Typography>trends</Typography>
          </Link>
        </Grid>
        <Grid item md={12}>
          <Link to="/main/wallet">
            <Typography>wallet</Typography>
          </Link>
        </Grid>
        <Grid item md={12}>
          <Link to="/main/notification">
            <Typography>notification</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}