import React from "react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import LibraryContainer from "../components/LibraryList";
import FadeList from "../components/FadeList";
import NeonGlow from "../components/NeonGlow";

const StyledPageDiv = styled.div`
  /* height: 50vh; */
  background: #1d1f2ee6;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  overflow: auto;
`;

// const TestDiv = styled.div`
//   height: 100px;
//   overflow: auto;
// `;

export default function Library() {
  return (
    <>
      {/* <GlobalStyles /> */}

      <StyledPageDiv>
        <NeonGlow />
        {/* <LibraryContainer /> */}
        <FadeList />
      </StyledPageDiv>
    </>
  );
}
