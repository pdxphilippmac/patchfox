import React, { useState } from "react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import AlterHomescreenLogo from "../icons/alterhomescreenlogo";
import AlterNeonGlow from "../components/AlterNeonGlow";

import LoginModal from "../components/LoginModal";
import LockSymbol from "../icons/lockSymbol";
// import ModalToggleButton from "../components/LoginModalToggleButton";

const StyledDiv = styled.div`
  height: 70vh;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default function Home() {
  const [toggleView, setToggleView] = useState(false);
  return (
    <>
      <GlobalStyles />
      <button onClick={() => setToggleView(!toggleView)}>
        <LockSymbol />
      </button>

      <LoginModal show={toggleView} />
      <StyledDiv>
        <>
          <AlterHomescreenLogo />

          <AlterNeonGlow />
        </>
      </StyledDiv>
    </>
  );
}
