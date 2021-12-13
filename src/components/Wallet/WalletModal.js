import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { yellowColor } from '../../assets/colors';
import CloseButton from '../CloseButton';
import CreateWallet from './CreateWallet';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 160px;
  background-color: white;
  border-radius: 10px;
`;
const Title = styled.span`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Box = styled.span`
  display: flex;
  width: 150px;
  height: 70px;
  background-color: black;
  color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  margin: 10px;
  cursor: pointer;

  &:hover {
    color: ${yellowColor};
  }
`;

const WalletModal = ({ handleClose }) => {
  const [clicked, setClicked] = useState();

  const View = () => {
    switch (clicked) {
      case 'create':
        return <CreateWallet handleClose={handleClose} />;
      case 'import':
        return <></>;
      default:
        return (
          <Container>
            <Title>Access Wallet</Title>
            <BoxContainer>
              <Box onClick={() => setClicked('create')}>Create Wallet</Box>
              <Box onClick={() => setClicked('import')}>Import Wallet</Box>
            </BoxContainer>
            <CloseButton onClose={handleClose} />
          </Container>
        );
    }
  };
  return <View />;
};

WalletModal.propTypes = {
  handleClose: PropTypes.func,
};
export default WalletModal;
