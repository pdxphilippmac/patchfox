import React from "react";
// import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import DataFetch from "../components/DataFetch";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  overflow: auto;
  /* background: black; */
`;

export default function Fetch() {
  return (
    <>
      <StyledDiv>
        <DataFetch />
      </StyledDiv>
    </>
  );
}
