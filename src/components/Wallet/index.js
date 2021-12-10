import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import { useDispatch } from 'react-redux';

// import { createAccount } from '../../modules/account';
import WalletModal from './WalletModal';

const Container = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  margin-left: 15px;
  margin-bottom: 30px;
  z-index: 1;

  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Text = styled.span`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
`;

const Wallet = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   create();
  // }, []);

  // const create = async () => {
  //   dispatch(createAccount({name:'Taeha', password:'950309'}));
  // };

  return (
    <>
      <Container onClick={handleOpen}>
        <Text>Wallet</Text>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <WalletModal handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default Wallet;
