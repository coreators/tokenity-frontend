import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar, Grid, Typography } from '@mui/material';
import { avatar } from '../dummyData';
import { yellowColor } from '../assets/colors';
import UnauthorizedPage from '../components/UnauthorizedPage';
import { CssTextField } from '../styled/TextField';
import { setProfile } from '../modules/account/actions';

const Button = styled.span`
  width: 120px;
  height: 30px;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    color: ${yellowColor};
  }
`;

export default function ProfileUpdate() {
  const { state } = useLocation();
  const data = state.data;

  const dispatch = useDispatch();

  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const updateClicked = () => {
    const account = {
      name: name,
      password: data.password,
      address: data.address,
      avatar: '',
      description: description,
    };
    dispatch(setProfile(account));
  };

  if (!data) return <UnauthorizedPage />;
  return (
    <>
      <Grid container rowSpacing={1}>
        <Grid item md={12}>
          <Typography variant="h5">Avatar</Typography>
        </Grid>
        <Grid item md={12} align="center">
          <Avatar src={avatar} sx={{ width: 120, height: 120 }} />
        </Grid>
        <Grid item md={12}>
          <Typography variant="h5">Username</Typography>
        </Grid>
        <Grid item md={12}>
          <CssTextField
            // label={data.name}
            id="custom-css-outlined-input"
            style={{ width: '100%' }}
            value={name}
            onChange={handleName}
          />
        </Grid>
        <Grid item md={12}>
          <Typography variant="h5">Description</Typography>
        </Grid>
        <Grid item md={12}>
          <CssTextField
            id="custom-css-outlined-input"
            style={{ width: '100%' }}
            value={description}
            onChange={handleDescription}
            multiline
          />
        </Grid>

        <Grid item md={5}>
          <Button onClick={updateClicked}>Update Profile</Button>
        </Grid>
      </Grid>
    </>
  );
}
