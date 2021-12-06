import React from 'react';
import styled from 'styled-components';

import Heart from './Heart';
import Message from './Message';

const Container = styled.div`
  display: flex;
`;

const IconSet = () => {
  return (
    <Container>
      <Heart />
      <Message />
    </Container>
  );
};

export default IconSet;