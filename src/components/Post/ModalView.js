import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 600px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24;
`;

const ModalView = () => {
  return (
    <Container>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        color="black"
      >
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }} color="black">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Container>
  );
};

export default ModalView;
