import React from "react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import LibraryContainer from "../components/LibraryList";

const StyledPageDiv = styled.div`
  height: 100vh;
  background: #1d1f2ee6;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default function Library() {
  return (
    <>
      <GlobalStyles />

      <>
        <StyledPageDiv>
          {/* <select>
        <option>Hello</option>
        <option>Test</option>
        <option>jo</option>
      </select> */}

          <LibraryContainer />
        </StyledPageDiv>
      </>
    </>
  );
}
