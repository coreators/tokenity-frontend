import { Grid, Typography } from '@mui/material';
import React from 'react';
import View from '../components/Post/View';

export default function Main() {
  return (
    <>
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
          <View />
        </Grid>
        <Grid item md={12}>
          <View />
        </Grid>
      </Grid>
    </>
  );
}
