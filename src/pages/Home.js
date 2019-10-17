import React from "react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";
import AlterHomescreenLogo from "../icons/alterhomescreenlogo";
import AlterNeonGlow from "../components/AlterNeonGlow";
import HomeScreenInput from "../components/HomeScreenLogin";
const StyledDiv = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <>
        <StyledDiv>
          <AlterHomescreenLogo />

          <AlterNeonGlow />
          <HomeScreenInput />
        </StyledDiv>
      </>
      {/* <Footer /> */}
    </>
  );
}
