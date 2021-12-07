import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { tokenNames, tokenPrices, avatars } from '../dummyData';

export default function Trends() {
  const tokens = tokenNames.map((name, index) => ({
    name,
    price: tokenPrices[index],
    avatar: avatars[index],
  }));

  return (
    <Grid container>
      {/* <Grid item md={12}>
        <Typography variant="h5">Trends</Typography>
      </Grid> */}
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
