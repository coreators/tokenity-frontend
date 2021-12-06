import React, { useState } from 'react';
import styled from 'styled-components';
// import { Heart as HeartEmptyIcon } from '@styled-icons/ionicons-outline';
// import { Heart as HeartFillIcon } from '@styled-icons/ionicons-sharp';
import { Heart as HeartEmptyIcon} from '@styled-icons/feather';
import { Heart as HeartFillIcon} from '@styled-icons/fluentui-system-filled';

const HeartFill = styled(HeartFillIcon)`
  color: red;
`;
const HeartEmpty = styled(HeartEmptyIcon)`
  color: black;
`;

const Heart = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <div onClick={handleToggle}>
      {toggle ? <HeartFill size={30} /> : <HeartEmpty size={30} />}
    </div>
  );
};

export default Heart;
