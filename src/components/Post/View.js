import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ModalView from './ModalView';

const Container = styled.div``;

const View = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Container onClick={handleOpen}>{text}</Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ModalView handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

View.propTypes = {
  text: PropTypes.string,
};

export default View;
