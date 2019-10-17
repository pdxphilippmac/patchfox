import React from "react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import Modal from "../components/Modal";
import Seachbar from "../components/Search";
import Foo from "../components/toggleButtonTest";

const StyledPageDiv = styled.div`
  height: 100vh;
  background: #1d1f2ee6;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default function Add() {
  return (
    <>
      <GlobalStyles />

      <>
        <StyledPageDiv>
          <Modal>
            <Seachbar />
          </Modal>
          <Foo />
        </StyledPageDiv>
      </>
    </>
  );
}
