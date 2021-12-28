import React from 'react';
import styled from 'styled-components';
// import { Grid } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { russianViolet } from '../../assets/colors';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  margin-left: 10px;
`;

const Button = styled.span`
  color: grey;
  font-size: 18px;
  font-family: 'Roboto';

  &:hover {
    color: ${russianViolet};
  }
`;
const SidebarLink = ({ text, link, clicked }) => {
  return (
    <Container>
      {clicked &&
        <CircleIcon color="secondary" sx={{ fontSize: 8, marginRight: 1, position: 'absolute', left: -12 }} />
      }
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Button variant="text">{text}</Button>
      </Link>
    </Container>
  );
};

SidebarLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  clicked: PropTypes.bool,
};

export default SidebarLink;
