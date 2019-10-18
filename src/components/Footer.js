import React from "react";
import styled from "styled-components";

import List from "../icons/footerList";
import Plus from "../icons/footerPlus";
import HomeActive from "../icons/footerHomeActive";
import Fetch from "../icons/footerFetch";

import { buildUp } from "../utils/animations";

const StyledContainer = styled.div`
  display: flex;
`;

const FooterBar = styled.nav`
  color: #1d1f2e;
  position: absolute;
  background: #1d1f2ee6;
  height: 60px;
  width: 100vw;
  position: fixed;
  z-index: 100;
  /* box-shadow: 0 -8px 8px -2px #00ceff; */
  list-style: none;

  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterBarAnimated = styled.nav`
  color: #1d1f2e;
  position: absolute;
  background: #1d1f2ee6;
  height: 60px;
  width: 100vw;
  position: fixed;
  z-index: 100;
  box-shadow: 0 -8px 8px -2px #00ceff;
  list-style: none;

  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${buildUp} 6s ease-out 1 both;
`;
const StyledHomeButton = styled.div`
  /* position: fixed; */
  border: none;
  z-index: -5001;

  background: #1d1f2e;
  box-shadow: 0 -8px 8px 0px #00ceff;
  border-radius: 50%;
  animation: ${buildUp} 6s ease-out 1 both;

  left: 40%;
  bottom: -10;
  :hover {
    box-shadow: 0 -8px 8px 0px #00ebff;
  }
  /* right: 0; */
`;
// const animated = {
// //   animation: `${blendInHome} 5s ease-in 1 both`
// // };

export default function Footer(children) {
  return (
    <>
      <StyledContainer>
        <FooterBar>
          <FooterBarAnimated>
            <a href="/Add/">
              <Plus />
            </a>
            <StyledHomeButton>
              <a href="/Home/">
                <HomeActive />
              </a>
            </StyledHomeButton>
            <a href="/Library/">
              <List />
            </a>
            <a href="/Fetch/">
              <Fetch />
            </a>
          </FooterBarAnimated>
        </FooterBar>
      </StyledContainer>
    </>
  );
}
