import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => (props.red ? '#7e1b22' : '#7a7a7a')};
  color: white;
  z-index: 1;
  border: ${props => (props.red ? '#7e1b22' : '#fff')};
  border-radius: 10px;
  padding: 10px 20px;
  letter-spacing: 1px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
		color: white;
		background: black;
		transition-duration: 0.5s;
    transform: scale(1.1);
  }
`;

const Button = props => {
  if (props.style === 1)
    return <StyledButton red>{props.content}</StyledButton>;
  if (props.style === 2) return <StyledButton>{props.content}</StyledButton>;
};

export default Button;
