import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Grid,
  Typography,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import Logout from '@mui/icons-material/Logout';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../modules/account/actions';

const DescriptionContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function SimpleProfile() {
  const { data } = useSelector((state) => state.account.account);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Grid container rowSpacing={2}>
        <Grid item md={12} />
        <Grid item md={1} />
        <Grid
          style={{ cursor: 'pointer' }}
          container
          md={11}
          onClick={handleClick}
        >
          <Grid item md={3}>
            <Avatar
              style={{ border: '1px solid black' }}
              alt="cosmonaut1"
              src={data.avatar}
            />
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={10}>
                <Typography
                  style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {data.name}
                </Typography>
              </Grid>
              <Grid item md={2} />
              <Grid item md={12}>
                <Typography>$3,599</Typography>
              </Grid>
            </Grid>
          </Grid>
          {data.description && (
            <>
              <Grid item md={1} />
              <Grid item md={10} style={{ padding: 0 }}>
                <DescriptionContainer>
                  <Typography>{data.description}</Typography>
                </DescriptionContainer>
              </Grid>
              <Grid item md={1} />
            </>
          )}
        </Grid>
        <Grid item md={12}>
          <Divider variant="middle" />
        </Grid>
        <Grid item md={12} />
        <Grid item md={12} />
      </Grid>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
