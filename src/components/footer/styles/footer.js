import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: rgb(138,138,138);
  background: linear-gradient(0deg, rgba(138,138,138,1) 0%, rgba(69,0,0,1) 41%, rgba(0,0,0,1) 100%);
  padding-top:100px;
  ;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 5px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 25px;
  font-size: 17px;
  text-decoration: none;

  &:hover {
    color: #A4A4A4;
    transition: 100ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 25px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  box-shadow: 0px 1px 0px 0px white;

  @media (max-width: 768px) {
    box-shadow: 0px 1px 0px 0px white;
  }
`;
