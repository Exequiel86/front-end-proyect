import styled from 'styled-components';

export const StyledWinesContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-wrap:wrap; 
  max-width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  @media(max-width: 786px) {
    flex-direction: column;
  }
`;

export const StyledCards = styled.div`
  width: 250px;
  height: 350px; 
  margin: 10px;
  padding: 20px;
  background: rgb(180,180,180);
  background: linear-gradient(0deg, rgba(180,180,180,1) 0%, rgba(0,0,0,1) 41%, rgba(180,180,180,1) 100%);
  border-radius: 8%;
  img {
    width:80%;
    height: 75%;
    margin-left: 20px;
   }
   img:hover {
    transform: scale(0.9);    
`;

export const StyledTopWinesTitle = styled.h2`
  font-size: 40px;
  padding-top:90px;
  color: black;
  text-align: center;
`;

export const StyledSpan = styled.span`
  color: #7e1b22;
`;

export const ImgText = styled.h5`
  text-align: center;
  margin-top: 5px;
`;
