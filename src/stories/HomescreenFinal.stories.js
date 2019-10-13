import React from "react";
import GlobalStyles from "../GlobalStyles";
import Footer from "../components/Footer";
import HomescreenLogo from "../icons/homescreenLogo";
import styled from "styled-components";
import AlterNeonGlow from "../components/AlterNeonGlow";
import LockSymbol from "../icons/lockSymbol";

const StyledDiv = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export default {
  title: "HomeScreenTesting"
};

export const HomeScreenTest = () => (
  <>
    <GlobalStyles />
    <>
      <LockSymbol />
      <StyledDiv>
        <HomescreenLogo />

        <AlterNeonGlow />
      </StyledDiv>
    </>
    <Footer />
  </>
);
