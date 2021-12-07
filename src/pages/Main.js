import { Grid, Box, Tabs, Tab } from '@mui/material';
import React from 'react';
import View from '../components/Post/View';

import img from '../assets/images/imgTest.jpeg';
import img2 from '../assets/images/cosmos.jpeg';

export default function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container rowSpacing={2}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
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
