import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderBar() {
  return (
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
  );
}
