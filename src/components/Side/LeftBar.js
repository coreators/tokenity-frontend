import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import Wallet from '../Wallet';
import SimpleProfile from '../Profile/SimpleProfile';
import SidebarLink from './SidebarLink';

// const Container = styled.span`
//   position: fixed;
//   height: 100%;
//   width: 200px;
//   background-color: yellow;
//   border-bottom: 1px solid black;
//   z-index: 99;
// `;

const linkArr = [
  { text: 'Home', link: '/main' },
  { text: 'Create', link: '/main' },
  { text: 'Trends', link: '/main/trends' },
  { text: 'Profile', link: '/main/profile' },
  { text: 'Wallet', link: '/main/wallet' },
  { text: 'Notification', link: '/main/notification' },
];

export default function LeftBar() {
  const { data } = useSelector((state) => state.account.account);
  const [clicked, setClicked] = useState(0);

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
            {linkArr.map((data, i) => {
              return (
                <SidebarLink
                  id={i}
                  text={data.text}
                  link={data.link}
                  clicked={clicked}
                  setClicked={setClicked}
                  key={i}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </Container>
  );
}
