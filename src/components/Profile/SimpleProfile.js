import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Grid, Typography, Divider } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function SimpleProfile() {
  const { data } = useSelector((state) => state.account.account);
  // const navigate = useNavigate();

  return (
    <>
      <Grid container rowSpacing={2}>
        <Grid item md={1} />
        <Grid item md={3}>
          <Avatar
            style={{ cursor: 'pointer', border: '1px solid black' }}
            alt="cosmonaut1"
            src={data.avatar}
            // onClick={() => navigate('/main/profile')}
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
            <Grid item md={10} style={{ padding: 0 }}>
              <DescriptionContainer>
                <Typography>{data.description}</Typography>
              </DescriptionContainer>
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
