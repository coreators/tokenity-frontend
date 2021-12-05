import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import View from '../components/Post/View';
import SimpleProfile from '../components/SimpleProfile';

export default function Main() {
  return (
    <>
      <Grid container>
        <Grid item md={8} align="center">
          <Link to="/main">
            <Typography>Tokenity</Typography>
          </Link>
        </Grid>
        <Grid item md={4}>
          <Typography>search</Typography>
        </Grid>
      </Grid>
      <Grid container>
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
        <Grid item md={6}>
          <Grid container>
            <Grid item md={4}>
              <Typography>Global</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography>following</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography>NFTs</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12}>
              <Typography>Post1</Typography>
              {/* <View /> */}
            </Grid>
            <Grid item md={12}>
              <Typography>Post2</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid container>
            <Grid item md={12}>
              <Typography>trend</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>Pravacy & rules</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
