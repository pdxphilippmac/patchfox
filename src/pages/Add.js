import React, { useState } from "react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

import Seachbar from "../components/Search";

const StyledPageDiv = styled.div`
  height: 100vh;
  background: #1d1f2ee6;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default function Add() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <GlobalStyles />

      <>
        <StyledPageDiv>
          <Seachbar onChange={event => setSearch(event.target.value)} />
        </StyledPageDiv>
      </>
    </>
  );
}
