import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from 'react';
import { tokens } from '../dummyData';

export default function Wallet() {
  return (
    <Grid container rowSpacing={2}>
      <Grid item md={12}>
        <Typography variant="h4">Wallet</Typography>
      </Grid>
      <Grid item md={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item md={12}>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          $COSM
        </Typography>
      </Grid>
      <Grid item md={3}>
        <Typography style={{ fontWeight: 'bold' }}>Balance</Typography>
      </Grid>
      <Grid item md={9}>
        <Typography>59.33 $COSM</Typography>
        <Typography style={{ color: 'GrayText' }}>≈ $128.85 USD</Typography>
      </Grid>
      <Grid item md={3}>
        <Typography style={{ fontWeight: 'bold' }}>Public Key</Typography>
      </Grid>
      <Grid item md={6}>
        <Typography>BC1YLiFNARSWF6qtXM5acr</Typography>
      </Grid>
      <Grid item md={3}>
        <ContentCopyIcon />
      </Grid>
      <Grid item md={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item md={12}>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          Creator Coins
        </Typography>
      </Grid>
      <Grid item md={2} />
      <Grid item md={7}>
        <Typography style={{ color: 'GrayText' }}>Name</Typography>
      </Grid>
      <Grid item md={3}>
        <Typography style={{ color: 'GrayText' }}>Price</Typography>
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
