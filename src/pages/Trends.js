import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import FaceIcon from '@mui/icons-material/Face';

function generate(element) {
  return [...Array(30).keys()].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Trends() {
  return (
    <>
      <List>
        {generate(
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FaceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Grid container>
                  <Grid item md={8}>
                    <Typography>이름</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>코인 가격</Typography>
                  </Grid>
                </Grid>
              }
            />
          </ListItem>,
        )}
      </List>
    </>
  );
}
