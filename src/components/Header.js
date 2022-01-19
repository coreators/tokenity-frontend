import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { headerColor } from '../assets/colors';
import img from '../assets/images/imgTest.jpeg';
import ModalCreate from './Post/ModalCreate';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background-color: ${headerColor};
  border-bottom: 1px solid black;
  z-index: 100;
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
const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
`;
const Button = styled.button`
  cursor: pointer;
  border-width: 0px;
  background-color: ${headerColor};
`;

const PostButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {

  }
`;
const PostText = styled.span`
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 5px;
`;
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <Button onClick={() => navigate('/main')} >
          <Title>Tokenity</Title>
        </Button>
        <PostButton onClick={handleOpen}>
          <AddBoxIcon />
          <PostText>
            Create Post
          </PostText>
        </PostButton>
      </Contents>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ModalCreate handleClose={handleClose} img={img} />
        </Box>
      </Modal>
    </Container>
  );
}
