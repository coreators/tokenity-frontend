import { Grid, Box, Tabs, Tab } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import View from '../components/Post/View';
import { getPosts } from '../modules/posts/actions';

import img from '../assets/images/imgTest.jpeg';
import img2 from '../assets/images/cosmos.jpeg';

export default function Main() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getPosts({}));
  }, []);

  return (
    <Grid container rowSpacing={2}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Global" />
          <Tab label="Following" />
          <Tab label="NFTs" />
        </Tabs>
      </Box>

      <Grid item md={12}>
        <View img={img} />
      </Grid>
      <Grid item md={12}>
        <View img={img2} />
      </Grid>
    </Grid>
  );
}
