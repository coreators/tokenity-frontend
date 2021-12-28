import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
// import styled from 'styled-components';

import Wallet from '../Wallet';
import SimpleProfile from '../SimpleProfile';
import SidebarLink from './SidebarLink';

// const Container = styled.span`
//   position: fixed;
//   height: 100%;
//   width: 200px; 
//   background-color: yellow;
//   border-bottom: 1px solid black;
//   z-index: 99;
// `;

export default function LeftBar() {
  const { data } = useSelector((state) => state.account.account);

  return (
    // <Container>
      <Grid item md={3}>
        <Grid container>
          <Grid item md={12}>
            {data ? <SimpleProfile /> : <Wallet />}
          </Grid>
          <Grid item md={1} />
          <Grid item md={11}>
            <Grid container rowSpacing={3}>
              <SidebarLink text={'Home'} link={'/main'} clicked />
              <SidebarLink text={'Create'} link={'/main'} />
              <SidebarLink text={'Trends'} link={'/main/trends'} />
              <SidebarLink text={'Profile'} link={'/main/profile'} clicked />
              <SidebarLink text={'Wallet'} link={'/main/wallet'} />
              <SidebarLink text={'Notification'} link={'/main/notification'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    // </Container>
  );
}
