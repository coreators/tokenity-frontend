import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { generate } from '../helpers';

export default function Wallet() {
  return (
    <Grid container>
      <Grid item md={12} align="center">
        <Typography>플랫폼 코인</Typography>
      </Grid>
      <Grid item md={12} align="center">
        <Typography>코인 가격</Typography>
      </Grid>
      <Grid item md={12} align="center">
        <Typography>지갑 주소</Typography>
      </Grid>
      <Grid item md={12} align="center">
        <Typography>Creator Coins</Typography>
      </Grid>
      <Grid item md={6} align="center">
        <Typography>이름</Typography>
      </Grid>
      <Grid item md={6} align="center">
        <Typography>가격</Typography>
      </Grid>
      <Grid item md={12}>
        <List>
          {generate(
            <ListItem>
              <ListItemText
                primary={
                  <Grid container>
                    <Grid item md={9}>
                      <Typography>wantyouring-coin</Typography>
                    </Grid>
                    <Grid item md={3}>
                      <Typography>$1000</Typography>
                    </Grid>
                  </Grid>
                }
              />
            </ListItem>,
          )}
        </List>
      </Grid>
    </Grid>
  );
}
