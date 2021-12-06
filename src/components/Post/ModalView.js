import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import img2 from '../../assets/images/imgTest.jpeg';
import Header from '../Profile/Header';
import CloseButton from '../CloseButton';

import { disableColor } from '../../assets/fontColor';
import IconSet from '../Icons/IconSet';
import Reply from '../Reply';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1600px;
  max-height: 800px;
  width: 70%;
  height: 80%;
  background-color: black;
  border-radius: 10px;
`;
const ImageContainer = styled.img`
  width: 70%;
  height: 100%;
  object-fit: contain;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 30%;
  height: 100%;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  // width: 100%;
  height: 80px;
  border-bottom: 1px solid ${disableColor}; 
  padding-left: 15px;
`;
const Body = styled.div`
  flex: 2;
  border-bottom: 1px solid ${disableColor}; 
`;
const Tail = styled.div`
  flex: 1;
  padding-left: 15px;
  padding-top: 15px;
`;
const Date = styled.span`
  font-size: 12px;
  color: grey;
`;

const ModalView = ({handleClose}) => {
  return (
    <Container>
      <ImageContainer src={img2} />
      <Content>
        <Profile>
          <Header />
        </Profile>
        <Body>Body</Body>
        <Tail>
          <IconSet />
          <h3>133 likes</h3>
          <Date>4 DAYS AGO</Date>
        </Tail>
        <Reply />
      </Content>
      <CloseButton onClose={handleClose} />
    </Container>
  );
};

ModalView.propTypes = {
  handleClose: PropTypes.func,
};
export default ModalView;
