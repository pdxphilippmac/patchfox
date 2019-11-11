import React from "react";
import styled from "styled-components";

import List from "../icons/footerList";

import AddApiIcon from "../icons/footerApiAddIcon";
import { NavLink } from "react-router-dom";
import HomeIcon from "../icons/footerHome";

import { buildUpFooter } from "../utils/animations";

import NewsIcon from "../icons/footerNewsIcon";

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
  color: #4f5359;
  position: absolute;
  background: ${({ theme }) => theme.footer};
  height: 55px;
  width: 100vw;
  position: fixed;
  z-index: 100;

  box-shadow: 0 -8px 8px -2px #d2590b;
  list-style: none;
  border-radius: 10px 10px 0 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;

  justify-content: space-between;

  animation: ${buildUpFooter} 3s ease-out 1 both;
  animation: ${({ theme }) => theme.animation};
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
    border-radius: 50%;
    animation: ${buildUpFooter} 1s ease-in 1 both;
    fill: ${({ theme }) => theme.fill};
    background: ${({ theme }) => theme.footer};
  }
`;

// const animated = {
// //   animation: `${blendInHome} 5s ease-in 1 both`
// // };

export default function Footer(children, active, stroke, bG, close) {
  return (
    <>
      <StyledContainer>
        <FooterBar className="navbar-list">
          <FooterBarAnimated>
            <StyledNavLink to="/home" activeClassName="chosen">
              <HomeIcon activeClassName="chosen" />
            </StyledNavLink>
            <StyledNavLink to="/news" activeClassName="chosen">
              <NewsIcon activeClassName="chosen" />
            </StyledNavLink>

            {/* <StyledNavLink to="/Add" activeClassName="chosen">
              <div className="navbar-item">
                <PlusIcon activeClassName="chosen" />
              </div>
            </StyledNavLink> */}

            <StyledNavLink to="/library" activeClassName="chosen">
              <List activeClassName="chosen" />
            </StyledNavLink>
            <StyledNavLink to="/fetch" activeClassName="chosen">
              <AddApiIcon activeClassName="chosen" />
            </StyledNavLink>
          </FooterBarAnimated>
        </FooterBar>
      </StyledContainer>
    </>
  );
}