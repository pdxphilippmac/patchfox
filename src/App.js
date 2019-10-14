import React from "react";

import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import AlterHomescreenLogo from "./icons/alterhomescreenlogo";
import styled from "styled-components";
import AlterNeonGlow from "./components/AlterNeonGlow";
import { HomeScreenInput } from "./stories/homescreen.stories";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeActive from "./icons/footerHomeActive";
import PlusActive from "./icons/footerPlusActive";
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

export default function App() {
  return (
    <Router>
      <div>
        <Footer>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <HomeActive />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <PlusActive />
                </Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </Footer>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
