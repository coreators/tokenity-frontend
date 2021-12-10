import React from 'react';
import styled from 'styled-components';

import img from '../../assets/images/cosmonaut1.jpeg';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100px;
`;
const Name = styled.span`
  margin-left: 15px;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Roboto';
`;

const Header = () => {
  return (
    <Container>
      <Image src={img} />
      <Name>cosmonaut</Name>
    </Container>
  );
};

export default Header;