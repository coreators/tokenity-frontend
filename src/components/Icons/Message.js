import React from 'react';
import styled from 'styled-components';
// import { MessageRounded } from '@styled-icons/boxicons-regular';
import { MessageCircle } from '@styled-icons/feather';

const MessageIcon = styled(MessageCircle)`
  color: black;
  margin-left: 5px;
`;

const Message = () => {
  return <MessageIcon fontWeight={2} size={30} />;

};

export default Message;