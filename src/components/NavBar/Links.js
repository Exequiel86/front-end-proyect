import React from 'react';

import styled from 'styled-components';
import Button from './Button';

export const myList = [
  ['NUESTROS VINOS', '#vinos'], ['NUESTRAS BODEGAS', '#bodegas'], ['MEMBRESÍA', '#form'], ['CONTACTO', '#footer']
];

const StyledLinks = styled.div`
  margin-top: -30px;
  margin-left: 120px;
  padding-bottom: 20px;
  order: 3;
  display: none;
  list-style: none;
  color: ${props => props.theme.color.tertiary};
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    }
  a:hover {
    cursor: pointer;
    color: #A4A4A4;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const Links = (props) => {
  return (
    <StyledLinks>
      {myList.map((link, index) => (
        <a key={index} href={link[1]}>{link[0]}</a>
      ))}
      <Button type='cart' onClick={props.onClick} counter={props.counter} />
    </StyledLinks>
  );
};

export default Links;
