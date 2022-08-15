import styled from 'styled-components';

export const StyledNavBar = styled.div`
  position: relative;
  background-color: ${props => props.theme.color.primary};
  opacity: 82%;
  height: auto;
  margin-bottom: auto;
  padding: 0 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 9;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -60px;
  gap: 35px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImgDiv = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-self: flex-start;  
  margin-left: -45px;
  padding-top: 10px;
`;

export const StyledImg = styled.img`
  object-fit: cover;
  width:auto;
  height:100%; 
  :hover{
    cursor: pointer;
    transform: scale(1.09); 

  }
`;
