import React, { useState } from "react";

import styled from "styled-components";

import FadeList from "../components/FadeList";
import NeonGlow from "../components/NeonGlow";
import Seachbar from "../components/Search";

const StyledPageDiv = styled.div`
  /* height: 50vh; */
  background: #1d1f2ee6;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  overflow: auto;
`;

const HeaderDiv = styled.div`
  /* display: flex;
  justify-content: flex-start; */
`;

const FlexDiv = styled.div`
  display: flex;
  background: #1d1f2e;
  flex-direction: row;
  position: fixed;
  z-index: 500;
`;
// const TestDiv = styled.div`
//   height: 100px;
//   overflow: auto;
// `;

export default function Library(handleInputChange) {
  return (
    <>
      {/* <GlobalStyles /> */}
      <FlexDiv>
        <HeaderDiv>
          <NeonGlow name1="Lib" name2="rary" />
        </HeaderDiv>
        <Seachbar />
      </FlexDiv>
      <StyledPageDiv>
        {/* <LibraryContainer /> */}
        <FadeList />
      </StyledPageDiv>
    </>
  );
}
