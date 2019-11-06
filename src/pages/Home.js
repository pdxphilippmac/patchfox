import React, { useState } from "react";
import styled from "styled-components";
import AlterHomescreenLogo from "../icons/alterhomescreenlogo";
import AlterNeonGlow from "../components/AlterNeonGlow";
import LoginModal from "../components/LoginModal";
import LockSymbol from "../icons/lockSymbol";
import img from "../resources/camo.jpg";

// import ModalToggleButton from "../components/LoginModalToggleButton";
const BackgroundDiv = styled.main`
  background-image: url(${img});

  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0px;
  width: 100vw;
  height: 100vh;
`;
const StyledDiv = styled.div`
  height: 55vh;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default function Home() {
  const [toggleView, setToggleView] = useState(false);
  // showLogin

  return (
    <>
      <BackgroundDiv>
        <button onClick={() => setToggleView(!toggleView)}>
          <LockSymbol />
        </button>

        {toggleView && <LoginModal show={toggleView} />}

        <StyledDiv>
          <AlterHomescreenLogo />
          <AlterNeonGlow />
        </StyledDiv>
      </BackgroundDiv>
    </>
  );
}
