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
  color: ${(props) => {
    if (props.selected) {
      return 'black';
    } else {
      return 'grey';
    }
  }};
  font-size: 18px;
  font-family: 'Roboto';

  &:hover {
    color: ${russianViolet};
  }
`;

const SidebarLink = ({ id, text, link, clicked, setClicked }) => {
  return (
    <Container onClick={() => setClicked(id)}>
      {id === clicked &&
        <CircleIcon
          color="secondary"
          sx={{ fontSize: 8, marginRight: 1, position: 'absolute', left: -12 }}
        />
      }
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Button variant="text" selected={id===clicked}>
          {text}
        </Button>
      </Link>
    </Container>
  );
};

SidebarLink.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  link: PropTypes.string,
  clicked: PropTypes.number,
  setClicked: PropTypes.func,
};

export default SidebarLink;
