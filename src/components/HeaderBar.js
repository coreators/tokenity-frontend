import React from 'react';
import { useNavigate } from 'react-router';
// import { Grid, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { headerColor } from '../assets/colors';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background-color: ${headerColor};
  border-bottom: 1px solid black;
  z-index: 1;
`;
const Contents = styled.div`
  display: flex;
  width: 96%;
  max-width: 680px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.text`
  font-weight: bold;
  font-size: 24px;
`;
const Button = styled.button`
  cursor: pointer;
  border-width: 0px;
  background-color: ${headerColor};
`;
export default function HeaderBar() {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <Button onClick={()=>navigate('/main')} >
          <Title>Tokenity</Title>
        </Button>
      </Contents>
      {/* <Grid container>
        <Grid item md={8} align="center">
          <Link to="/main">
            <Typography>Tokenity</Typography>
          </Link>
        </Grid>
        <Grid item md={4}>
          <Typography>search</Typography>
        </Grid>
      </Grid> */}
    </Container>
  );
}
