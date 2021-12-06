import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { generate } from '../helpers';

export default function Notification() {
  return (
    <Grid container align="center">
      <Grid item md={12}>
        <Typography> Notification</Typography>
      </Grid>
      <Grid item md={12}>
        <List>
          {generate(
            <ListItem>
              <ListItemText
                primary={
                  <Typography>
                    wantyouring 님이 회원님을 팔로우하기 시작했습니다.
                  </Typography>
                }
              />
            </ListItem>,
          )}
        </List>
      </Grid>
    </Grid>
  );
}
