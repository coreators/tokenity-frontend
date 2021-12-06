import React from 'react';
import { Grid, Typography } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

export default function SimpleProfile() {
  return (
    <>
      <Grid container>
        <Grid item md={3}>
          <FaceIcon />
        </Grid>
        <Grid item md={9}>
          <Grid container>
            <Grid item md={12}>
              <Typography>name</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>token price</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Typography>simple description</Typography>
        </Grid>
      </Grid>
    </>
  );
}
