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

export default function Notification() {
  const days = ['New', 'Today', 'This Week', '', ''];
  const mins = ['30m', '5h', '1d', '1d', '2d'];

  return (
    <Grid container rowSpacing={2}>
      <Grid item md={12}>
        <Typography variant="h4">Notification</Typography>
      </Grid>
      <Grid item md={12}>
        <Grid container>
          {tokens.map(({ name, avatar }, index) => (
            <>
              <Grid item md={12}>
                {days[index] ? (
                  <Grid container rowSpacing={1}>
                    <Grid item md={12}>
                      <Divider variant="left" />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item md={11}>
                      <Typography style={{ fontWeight: 'bold' }}>
                        {days[index]}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}

                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar src={avatar} variant="span" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Grid container>
                        <Grid item md={12}>
                          <Typography>
                            <Typography
                              variant="span"
                              style={{ fontWeight: 'bold' }}
                            >
                              {name}
                            </Typography>{' '}
                            started following you.{' '}
                            <Typography
                              variant="span"
                              style={{ color: 'gray' }}
                            >
                              {mins[index]}
                            </Typography>
                          </Typography>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItem>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
