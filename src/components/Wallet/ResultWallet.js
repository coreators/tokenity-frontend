import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { setProfile } from '../../modules/account/actions';
import { yellowColor } from '../../assets/colors';
import { BACKUP_WARNING, BACKUP_WARNING2 } from '../../assets/texts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
`;
const Title = styled.span`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
const Box = styled.span`
  display: flex;
  flex: 1;
  color: black;
  padding: 5px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
`;
const Button = styled.span`
  width: 100%;
  height: 50px;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    color: ${yellowColor};
  }
`;
const ResultWallet = ({ accountData }) => {
  const dispatch = useDispatch();

  const create = async () => {

    const account = {
      name: accountData.name,
      password: accountData.password,
      address: accountData.address,
      avatar: undefined,
      description: '',
    };

    dispatch(setProfile(account));
  };

  return (
    <Container>
      <Title>Secret Backup Phrase</Title>
      <Box>{BACKUP_WARNING}</Box>
      <Box>{BACKUP_WARNING2}</Box>
      <Box style={{border: '1px solid black'}}>{accountData.mnemonic}</Box>
      <Button onClick={create}>Done</Button>
    </Container>
  );
};

ResultWallet.propTypes = {
  accountData: {
    name: PropTypes.string,
    password: PropTypes.string,
    address: PropTypes.string,
    mnemonic: PropTypes.string,
  },
};

export default ResultWallet;
