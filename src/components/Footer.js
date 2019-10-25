import React from "react";
import styled from "styled-components";

import List from "../icons/footerList";
import Plus from "../icons/footerPlus";
import HomeActive from "../icons/footerHomeActive";
import FetchIcon from "../icons/footerFetch";
import { NavLink } from "react-router-dom";

import { buildUp } from "../utils/animations";
import Home from "../pages/Home";

const StyledContainer = styled.div`
  display: flex;
`;

const FooterBar = styled.nav`
  /* color: #1d1f2e;
  position: absolute;
  background: #1d1f2ee6;
  height: 55px;
  width: 100vw;
  position: fixed;
  z-index: 100;
 
  list-style: none;
  border-radius: 10px 10px 0 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between; */
`;

const FooterBarAnimated = styled.nav`
  color: #1d1f2e;
  position: absolute;
  background: #1d1f2ee6;
  height: 55px;
  width: 100vw;
  position: fixed;
  z-index: 100;
  box-shadow: 0 -8px 8px -2px #00ceff;
  list-style: none;
  border-radius: 10px 10px 0 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;

  justify-content: space-between;

  animation: ${buildUp} 3s ease-out 1 both;
`;
// const StyledHomeButton = styled.div`
//   /* position: fixed; */
//   border: none;
//   z-index: -5001;

//   background: #1d1f2e;
//   box-shadow: 0 -8px 8px 0px #00ceff;
//   border-radius: 50%;
//   animation: ${buildUp} 2s ease-out 1 both;

//   left: 40%;
//   bottom: -10;
//   :hover {
//     box-shadow: 0 -8px 8px 0px #00ebff;
//   }
//   /* right: 0; */
// `;

const activeClassName = "active";
const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  &.${activeClassName} {
    background: #1d1f2e;
    border-radius: 50%;
    box-shadow: 0 -8px 8px 0px #00ceff;
    animation: ${buildUp} 3s ease-in 1 both;
  }
`;

// const animated = {
// //   animation: `${blendInHome} 5s ease-in 1 both`
// // };

export default function Footer(children, active, stroke) {
  return (
    <>
      <StyledContainer>
        <FooterBar className="navbar-list">
          <FooterBarAnimated>
            {/* <a href="/Add/">
              <Plus />
            </a>
            <StyledHomeButton>
              <a href="/Home/">
                <HomeActive stroke={active} />
              </a>
            </StyledHomeButton>
            <a href="/Library/">
              <List />
            </a>
            <NavLink to="/" className="navbar-logo">dA</NavLink>
            <a href="/Fetch/">
              <FetchIcon />
            </a> */}
            <StyledNavLink to="/Home" activeClassName="chosen">
              <HomeActive />
            </StyledNavLink>
            <StyledNavLink to="/Add" activeClassName="chosen">
              <div className="navbar-item">
                <Plus />
              </div>
            </StyledNavLink>

            <StyledNavLink to="/Library" activeClassName="chosen">
              <List />
            </StyledNavLink>
            <StyledNavLink to="/Fetch" activeClassName="chosen">
              <FetchIcon />
            </StyledNavLink>
          </FooterBarAnimated>
        </FooterBar>
      </StyledContainer>
    </>
  );
}
