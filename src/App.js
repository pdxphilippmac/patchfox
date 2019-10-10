import React from "react";
import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import HomescreenLogo from "./icons/homescreenLogo";
import styled from "styled-components";
import NeonGlow from "./components/NeonGlow";

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

          <NeonGlow />
        </StyledDiv>
      </>
      <Footer />
    </>
  );
}

export default App;
