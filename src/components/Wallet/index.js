import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { of } from 'await-of';

import { checkKeplr, getCosmosClient } from '../../utils/wallet';
import WalletModal from './WalletModal';

const Container = styled.div`
  display: flex;
  width: 180px;
  height: 40px;
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
  const handleClose = () => setOpen(false);

  const handleOpen = async () => {
    const chainId = 'cosmoshub-4';
    const [, err] = await of(checkKeplr(chainId));
    if (err) {
      if (err.name == 'NotFoundError') {
        window.open('https://www.keplr.app/', '_blank');
      } else {
        setOpen(true);
      }
    } else {
      const client = await getCosmosClient(chainId);
      console.log(client);
    }
  };

  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Container onClick={handleOpen}>
          <Text>Connect Keplr Wallet</Text>
        </Container>

        <Modal
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <WalletModal handleClose={handleClose} />
          </Box>
        </Modal>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert severity="error">Please signin your keplr wallet.</Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default Wallet;
