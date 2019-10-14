import React from "react";
import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import HomescreenLogo from "./icons/homescreenLogo";
import styled from "styled-components";
import AlterNeonGlow from "./components/AlterNeonGlow";
import { HomeScreenInput } from "./stories/homescreen.stories";

const StyledDiv = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <>
        <StyledDiv>
          <HomescreenLogo />

          <AlterNeonGlow />
          <HomeScreenInput />
        </StyledDiv>
      </>
      <Footer />
    </>
  );
}

export default App;
