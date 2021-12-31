import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Avatar, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import { yellowColor } from '../assets/colors';
import UnauthorizedPage from '../components/UnauthorizedPage';
import { CssTextField } from '../styled/TextField';
import { setProfile } from '../modules/account/actions';
// import { addData } from '../utils/ipfs';

const ImgButton = styled.span`
  width: 120px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: white;
    border-color: green;
    background-color: green;
  }
`;
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
  const navigate = useNavigate();

  const { state } = useLocation();
  const data = state.data;

  const hiddenFileInput = useRef(null);

  const dispatch = useDispatch();

  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [image, setImage] = useState(data.avatar);

  const handleName = (event) => {
    let input = event.target.value;
    if (input.length > 10){
      input = input.slice(0, 10);
    }
    setName(input);
  };
  const handleDescription = (event) => {
    let input = event.target.value;
    if (input.length > 10){
      input = input.slice(0, 300);
    }
    setDescription(input);
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const updateClicked = () => {
    const account = {
      name: name,
      password: data.password,
      address: data.address,
      avatar: image,
      description: description,
    };
    dispatch(setProfile(account));

    // addData();
    navigate('/main/profile');
  };

  const onImgChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  if (!data) return <UnauthorizedPage />;
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Grid container rowSpacing={1}>
        <Grid item md={12}>
          <Typography variant="h5">Avatar</Typography>
        </Grid>
        <Grid item md={2} align="center">
          <Avatar
            src={image}
            sx={{ width: 120, height: 120, border: '1px solid black' }}
          />
        </Grid>
        <Grid item md={10} align="center"></Grid>
        <Grid item md={2} align="center">
          <ImgButton onClick={handleClick}>Update Image</ImgButton>
          <input
            ref={hiddenFileInput}
            style={{ display: 'none' }}
            type="file"
            accept="image/*"
            name="file"
            onChange={onImgChange}
          />
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
    </Stack>
  );
}
