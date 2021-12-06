import React from 'react';
import styled from 'styled-components';

import img from '../../assets/images/cosmonaut1.jpeg';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100px;
`;
const Name = styled.span`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
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