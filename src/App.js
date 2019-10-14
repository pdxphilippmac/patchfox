import React from "react";

import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import AlterHomescreenLogo from "./icons/alterhomescreenlogo";
import styled from "styled-components";
import AlterNeonGlow from "./components/AlterNeonGlow";
import ListItemContainer from "./components/List";
import { HomeScreenInput } from "./stories/homescreen.stories";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <>
//         <StyledDiv>
//           <AlterHomescreenLogo />

//           <AlterNeonGlow />
//           <HomeScreenInput />
//         </StyledDiv>
//       </>
//       <Footer />
//     </>
//   );
// }

// export default App;

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
        <StyledDiv>
          <StyledListTag>Hello this is Plus-Path</StyledListTag>
        </StyledDiv>
      </>
    </>
  );
}

function List() {
  return (
    <>
      <GlobalStyles />
      <>
        <StyledDiv>
          <StyledListTag>Hello this is List-Path</StyledListTag>
          <ListItemContainer />
          <ListItemContainer />
          <ListItemContainer />
          <ListItemContainer />
        </StyledDiv>
      </>
    </>
  );
}
