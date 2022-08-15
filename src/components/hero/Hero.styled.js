import styled from 'styled-components';

export const StyledHero = styled.div`
  height: 600px;
  background: url(${({ img }) => img}) no-repeat top fixed;;
  width: 100%;
  margin: 0 auto;
  position: relative;

`;

export const StyledOverlay = styled.div`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
  z-index: 0;
`;

export const StyledText = styled.p`
  position: relative;
  padding-top: 180px;
  text-align: center;
  color: ${props => props.theme.color.tertiary};
  font-size: 45px;
  font-weight: 700;
  text-shadow: 30px 30px 20px black;
  max-width: 600px;
  margin: 0 auto;
  @media(max-width:768){
    font-size: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;
