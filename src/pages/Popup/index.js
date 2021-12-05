import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import View from '../../components/Post/View';

const Background = styled.div`
`;

const Popup = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Background>
      <Button onClick={handleOpen}>Open modal</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <View />
        </Box>
      </Modal>
    </Background>
  );
};

export default Popup;
