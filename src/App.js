import React from "react";

import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import AlterHomescreenLogo from "./icons/alterhomescreenlogo";
import styled from "styled-components";
import AlterNeonGlow from "./components/AlterNeonGlow";
import Foo from "./components/toggleButtonTest";
import ListItemContainer from "./components/LibraryList";
import { HomeScreenInput } from "./stories/homescreen.stories";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LibraryContainer from "./components/LibraryList";
import Modal from "./components/Modal";
// import HomeActive from "./icons/footerHomeActive";
// import PlusActive from "./icons/footerPlusActive";
// import ListActive from "./icons/footerlistActive";
const StyledDiv = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;
const StyledPageDiv = styled.div`
  height: 100vh;
  background: #1d1f2ee6;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

const StyledListTag = styled.h1`
  color: lightgreen;
  border: red;
  display: flex;
  font-family: "futura";

  justify-content: center;
`;

export default function App() {
  return (
    <Router>
      <div>
        <Footer />

        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route path="/Plus" component={Plus} />
          <Route path="/List" component={List} />
          {/* <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
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

function Plus() {
  return (
    <>
      <GlobalStyles />

      <>
        <StyledPageDiv>
          <StyledListTag>Hello this is Plus-Path</StyledListTag>
          <Modal />
        </StyledPageDiv>
      </>
    </>
  );
}

function List() {
  return (
    <>
      <GlobalStyles />
      <>
        <StyledPageDiv>
          <StyledListTag>
            <Foo />
          </StyledListTag>
          <LibraryContainer />
        </StyledPageDiv>
      </>
    </>
  );
}
