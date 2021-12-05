import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function RightBar() {
  return (
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
  );
}
