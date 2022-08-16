import React from 'react'

import styled from 'styled-components';
import { StyledSlider } from './StyledSlider';
import { myList } from '../Links';

const StyledMenu = styled(StyledSlider)`
  div {
    color: ${props => props.theme.color.tertiary};
    display: grid;
    width: 130px;
    gap: 20px;
    margin-left: -75px;
    padding-right: 0px; 
    a {
      color: #fff;
      text-decoration: none;
    }
    a:hover{
      color: #D34773;
    }
  }
`;

const MenuSlider = props => {
  return (
    <StyledMenu opened={props.opened}>
      <div>
        {myList.map((link, index) => (
          <a href={link[1]} key={index}>{link[0]}</a>
        ))}
      </div>
    </StyledMenu>
  );
};

export default MenuSlider;
