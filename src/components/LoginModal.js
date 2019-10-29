import React from "react";

import styled from "styled-components";
import HomescreenPasswordInput from "./HomeScreenLogin";

const ModalContainer = styled.div`
  background-color: black;
  color: white;
  padding: 30px;
  position: fixed;
  top: 100px;
  left: 50%;
  top: 40%;
  margin-left: -150px;
  margin-top: -80px;
  font-size: 1.4em;
  z-index: 3;
  display: ${props => (props.show ? "block" : "none")};
  box-shadow: 0px 4px 6px #00ceff;
  border-radius: 15px;
`;
/* ${props => (props.show ? "block" : "none")}; */
const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default function LoginModal({ show }) {
  return (
    <ModalContainer show={show}>
      <Container>
        <HomescreenPasswordInput />
      </Container>
    </ModalContainer>
  );
}
