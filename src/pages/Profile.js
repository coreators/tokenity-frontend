import { Grid, Typography } from '@mui/material';
import React from 'react';
import FaceIcon from '@mui/icons-material/Face';

export default function Profile() {
  return (
    <>
      <Grid container>
        <Grid item md={6}>
          <FaceIcon />
        </Grid>
        <Grid item md={6}>
          <Grid container>
            <Grid item md={12}>
              <Typography>이름</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>Coin Price</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>지갑 주소</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>게시물 14 팔로워 195204 팔로우 76</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography>나에 대한 소개 글</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Typography>Posts</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography>creator coin</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography>NFTs</Typography>
        </Grid>
        <Grid container>
          <Grid item md={6}>
            <Typography>Posts1</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography>Posts2</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography>Posts3</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography>Posts4</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
