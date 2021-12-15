import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Grid, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SimpleProfile() {
  const { data } = useSelector((state) => state.account.account);
  const navigate = useNavigate();

  return (
    <>
      <Grid container rowSpacing={2}>
        <Grid item md={1} />
        <Grid item md={3}>
          <Avatar
            style={{ cursor: 'pointer', border: '1px solid black' }}
            alt="cosmonaut1"
            src={data.avatar}
            onClick={() =>
              navigate('/main/profile', {
                state: {
                  data,
                },
              })
            }
          />
        </Grid>
        <Grid item md={8}>
          <Grid container>
            <Grid item md={10}>
              <Typography
                style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {data.name}
              </Typography>
            </Grid>
            <Grid item md={2} />
            <Grid item md={12}>
              <Typography>$3,599</Typography>
            </Grid>
          </Grid>
        </Grid>
        {data.description && (
          <>
            <Grid item md={1} />
            <Grid item md={10}>
              <div>
                <Typography>{data.description}</Typography>
              </div>
            </Grid>
            <Grid item md={1} />
          </>
        )}
        <Grid item md={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item md={12} />
        <Grid item md={12} />
      </Grid>
    </>
  );
}
