import React from 'react';
import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';

import { disableColor } from '../../assets/fontColor';

const Container = styled.div`
  // position: absolute;
  // left: 0;
  // bottom: 0;
  display: flex;
  margin-top: auto;
  width: 100%;
  heigth: 120px;
  border-top: 1px solid ${disableColor};
`;
const PostButton = styled.span`
  display: flex;
  margin-right: 7px;
  text-align: center;
  align-items: center;
  color: blue;
  cursor: pointer;
  font-family: 'Roboto';
`;

const Reply = () => {
  return (
    <Container>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Add a comment..." />
      <PostButton>Post</PostButton>
    </Container>
  );
};

export default Reply;