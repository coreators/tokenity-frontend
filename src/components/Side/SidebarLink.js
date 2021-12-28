import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = styled.span`
  color: blue;
  font-size: 18px;
  font-family: 'Roboto';
`;
const SidebarLink = ({ text, link }) => {
  console.log(text, link);
  return (
    <Grid item md={12}>
      <Button variant="text">
        <Link to={link} style={{ textDecoration: 'none' }}>
          {text}
        </Link>
      </Button>
    </Grid>
  );
};

SidebarLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default SidebarLink;
