import React from 'react';
import styled from 'styled-components';

export const Modal = ({
  children,
  estado,
  cambiarEstado,
  titulo = 'Alerta',
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
}) => {
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal padding={padding}>
            {mostrarHeader && (
              <EncabezadoModal>
                <h3>{titulo}</h3>
              </EncabezadoModal>
            )}
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-x'
                viewBox='0 0 16 16'>
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};
export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props =>
    props.mostrarOverlay ? 'rgba(52,83,193,.36)' : 'rgba(0,0,0,0)'};
  padding: 40px;
  display: flex;
  align-items: ${props =>
    props.posicionModal ? props.posicionModal : 'center'};
  justify-content: center;
  z-index:20000;
`;
const ContenedorModal = styled.div`
  width: 250px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${props => (props.padding ? props.padding : '20px')};
  right:50px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 200;
    font-size: 16px;
    color: #1766dc;
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #826a45;

  &:hover {
    color: #7e1b22;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
