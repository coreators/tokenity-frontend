import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';

const Close = styled.span`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 2px;
  right: 2px;
  text-align: center;
  cursor: pointer;
`;

const CloseButton = ({onClose}) => {
  return (
    <Close onClick={onClose}>
      <ImCross style={{marginTop: 5}} />
    </Close>
  );
};

CloseButton.propTypes = {
  onClose: PropTypes.func,
};
export default CloseButton;