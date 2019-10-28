import React, { useState } from "react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import AlterHomescreenLogo from "../icons/alterhomescreenlogo";
import AlterNeonGlow from "../components/AlterNeonGlow";
import HomeScreenInput from "../components/HomeScreenLogin";
import SortModal from "../components/LoginModal";
import LockSymbol from "../icons/lockSymbol";

const StyledDiv = styled.div`
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default function Home() {
  const [displaySort, setDisplaySort] = useState(false);
  return (
    <>
      <GlobalStyles />
      <button onClick={() => setDisplaySort(!displaySort)}>
        <LockSymbol />
      </button>
      <StyledDiv>
        <SortModal show={displaySort} />
        <>
          <AlterHomescreenLogo />

          <AlterNeonGlow />
        </>
      </StyledDiv>
    </>
  );
}
