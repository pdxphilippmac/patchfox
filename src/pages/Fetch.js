import React from "react";
// import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import DataFetch from "../components/DataFetch";

const StyledDiv = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default function Fetch() {
  return (
    <>
      <>
        <StyledDiv>
          <DataFetch />
        </StyledDiv>
      </>
      {/* <Footer /> */}
    </>
  );
}
