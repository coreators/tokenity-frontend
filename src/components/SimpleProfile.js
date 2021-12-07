import React from 'react';
import { Avatar, Grid, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import avatar from '../assets/images/cosmonaut1.jpeg';

export default function SimpleProfile() {
  return (
    <>
      <Grid container rowSpacing={2}>
        <Grid item md={1} />
        <Grid item md={2}>
          <Link to="/main/profile">
            <Avatar alt="cosmonaut1" src={avatar} />
          </Link>
        </Grid>
        <Grid item md={9}>
          <Grid container>
            <Grid item md={12}>
              <Typography>cosmonaut</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>$3,599</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} />
        <Grid item md={11}>
          <Typography>Hello~ I`m cosmonaut. </Typography>
          <Typography>Nice to meet you!</Typography>
        </Grid>
        <Grid item md={12} />
        <Grid item md={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item md={12} />
        <Grid item md={12} />
      </Grid>
    </>
  );
}
