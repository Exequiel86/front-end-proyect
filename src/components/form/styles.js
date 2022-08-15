import styled from "styled-components";

export const StyledForm = styled.div`
  margin:  auto ;
  color: #fff;
  background-color: white;
  padding: 120px 15px;
  font-size: 12px;
  span {
    color: #7e1b22;
    font-weight: 800;

  }
  p {
    font-size: 20px;
    margin-top: 16px;
    margin-bottom: 14px;
    color: black;
    font-weight: bold;
  }
  form {
    max-width: 530px;
    @media (min-width: 1024px) {
      width: 530px;
    }
    @media (max-width: 572px) {
      width: 92%;
    }
  }
  button {
    color: #fff;
    background-color: #575757;
    border: none;
    padding: 10px 20px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 16px;
    @media (max-width: 572px) {
      width: 100%;
    }
  }
  button:hover {
    cursor: pointer;
    color: white;
    background: black;
    transition-duration: 0.5s;
  }
`;

export const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;
export const StyledH2 = styled.h2`
  font-size: 37px;
  color: black;
`;

export const InputLayoutDiv = styled.div`
  @media (min-width: 572px) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (min-width: 1024px) {
    max-width: 1024px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    font-size: 18px;
    color: #fff;
    padding: 12px 14px;
    background-color: #2b2628;
    border: 1px solid ${(props) => (props.hasError ? "#b21e35" : "#fff")};
    border-radius: 4px;
    transition: all 0.5s;
  }
  input:focus {
    outline: none;
    background-color: #161314;
  }
  input:hover {
    cursor: text;
  }
  p {
    font-size: 16px;
    color: #b21e35;
    opacity: ${(props) => (props.hasError ? 1 : 0)};
    margin-top: 4px;
    margin-bottom: 20px;
  }
`;