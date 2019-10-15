import React from "react";
import styled from "styled-components";
import PlusActive from "../icons/footerPlusActive";
import HomeActive from "../icons/footerHomeActive";
import PropTypes from "prop-types";

const Container = styled.div`
  background: #1d1f2ee6;

  box-shadow: 0 0 10px ${props => props.theme.shadow};
  border-radius: 10px;
  display: ${props => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 60px 10px;
  width: calc(100% - 52px);
  margin: 40px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

const ClosingDiv = styled.div`
  position: absolute;
  right: -10px;
  top: -22px;
`;
const SubmitButton = styled.div`
  position: absolute;
  left: calc(50% - 22px);
  bottom: -20px;
`;
const Backdrop = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: #6f6f6fde;
  z-index: 10;
`;

export default function Modal({
  children,
  show = true,
  hideBackdrop,
  onClose,
  onAccept
}) {
  return (
    <>
      <Container show={show}>
        {children}
        <ClosingDiv>
          <PlusActive onClick={onClose} />
        </ClosingDiv>
        <SubmitButton>
          <HomeActive onClick={onAccept} />
        </SubmitButton>
      </Container>
      {!hideBackdrop && <Backdrop onClick={onClose} show={show} />}
    </>
  );
}
Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  hideBackdrop: PropTypes.bool,
  onShow: PropTypes.func,
  onAccept: PropTypes.func,
  onClose: PropTypes.func
};
