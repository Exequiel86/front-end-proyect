import React from 'react';
import {
  StyledBackdrop,
  StyledButton,
  StyledLogo,
  StyledMessage,
  StyledModalAge,
} from './ModalAge.styled';
import logo from '../../images/numen.png';

const ModalAge = ({onConfirm}) => {
  
  return (
    <>
      <StyledBackdrop></StyledBackdrop>
      <StyledModalAge>
        <StyledLogo src={logo} />
        <StyledMessage>Debes ser mayor de 18 años para continuar</StyledMessage>
        <StyledButton>SOY MENOR</StyledButton>
        <StyledButton main onClick={onConfirm}>
          SOY MAYOR DE 18, VAMOS
        </StyledButton>
      </StyledModalAge>
    </>
  );
};

export default ModalAge;
