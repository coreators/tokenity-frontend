import React, { useState } from 'react';
import { Secp256k1HdWallet } from '@cosmjs/launchpad';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import CloseButton from '../CloseButton';

import { yellowColor } from '../../assets/colors';
import ResultWallet from './ResultWallet';

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
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      marginBottom: '8px',
    },
    '&:hover fieldset': {
      borderColor: 'green',
      borderWidth: '2px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});
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
const CreateWallet = ({ handleClose }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [errMsg, setErrMsg] = useState(null);

  const [accountData, setAccountData] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPwd = (event) => {
    setConfirmPwd(event.target.value);
  };

  const createClicked = async () => {
    console.log(password, confirmPwd);
    if (name == '' || password == '' || confirmPwd == '') {
      setErrMsg('Please fill in all blanks.');
      return false;
    }
    if (password != confirmPwd) {
      setErrMsg('The password confirmation does not match.');
      return false;
    }

    const wallet = await Secp256k1HdWallet.generate();
    console.log('Mnemonic:', wallet.mnemonic);

    const [{ address }] = await wallet.getAccounts();
    console.log('Address:', address);

    const newAccountData = {
      name: name,
      password: password,
      address: address,
      mnemonic: wallet.mnemonic,
    };

    setErrMsg(null);
    setAccountData(newAccountData);

    return true;
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {accountData ? (
        <ResultWallet accountData={accountData} />
      ) : (
        <Container>
          <Title>Create Wallet</Title>
          <CssTextField
            style={{ marginBottom: 10, marginTop: 10 }}
            label="Wallet name"
            id="custom-css-outlined-input"
            value={name}
            onChange={handleName}
          />
          <CssTextField
            label="Password"
            id="custom-css-outlined-input"
            value={password}
            onChange={handlePassword}
            type="password"
          />
          <CssTextField
            label="Confirm password"
            id="custom-css-outlined-input"
            value={confirmPwd}
            onChange={handleConfirmPwd}
            type="password"
          />
          <Button onClick={createClicked}>Create</Button>
          <CloseButton onClose={handleClose} />
        </Container>
      )}
      {errMsg && (
        <Alert
          style={{ marginLeft: 'auto', marginRight: '20px' }}
          severity="error"
        >
          {errMsg}
        </Alert>
      )}
    </Stack>
  );
};

CreateWallet.propTypes = {
  handleClose: PropTypes.func,
};
export default CreateWallet;
