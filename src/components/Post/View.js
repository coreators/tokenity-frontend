import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Header from '../Profile/Header';
import { disableColor } from '../../assets/colors';
import Reply from '../Reply';
import IconSet from '../Icons/IconSet';

import ModalView from './ModalView';

const Container = styled.div`
  // width: 450px;
  width: 100%;
  // height: 550px;
  margin-bottom: 25px;
  border: 1px solid grey;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  // width: 100%;
  height: 50px;
  border-bottom: 1px solid ${disableColor};
  padding-left: 15px;
`;
const ImageContainer = styled.img`
  width: 100%;
  // height: 100%;
  object-fit: contain;
  cursor: pointer;
`;
const Tail = styled.div`
  padding-left: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: 'Roboto';
`;
const Date = styled.span`
  font-size: 12px;
  color: grey;
`;

const View = ({img}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Container>
        <Profile>
          <Header />
        </Profile>
        <ImageContainer src={img} onClick={handleOpen} />
        <Tail>
          <IconSet />
          <h3>133 likes</h3>
          <Date>4 DAYS AGO</Date>
        </Tail>
        <Reply />
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ModalView handleClose={handleClose} img={img} />
        </Box>
      </Modal>
    </div>
  );
};

View.propTypes = {
  img: PropTypes.any,
};

export default View;