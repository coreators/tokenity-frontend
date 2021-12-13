import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { tokens } from '../dummyData';

export default function Trends() {
  return (
    <Grid container rowSpacing={2}>
      <Grid item md={12}>
        <Typography variant="h4">Trends</Typography>
      </Grid>
      <Grid item md={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item md={12}>
        {tokens.map(({ name, price, avatar }, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Grid container>
                  <Grid item md={8}>
                    <Typography>{name}</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>~${price}</Typography>
                  </Grid>
                </Grid>
              }
            />
          </ListItem>
        ))}
      </Grid>
    </Grid>
  );
}
