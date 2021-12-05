import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Main() {
  return (
    <>
      <Grid container>
        <Grid item md={8} align="center">
          <Typography>Tokenity</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography>search</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={3}>
          <Grid container>
            <Grid item md={12}>
              <Typography>simple profile</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>home</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>create</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>trends</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>wallet</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>notification</Typography>
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
