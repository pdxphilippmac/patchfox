import React from "react";
import styled from "styled-components";

import List from "../icons/footerList";
import Plus from "../icons/footerPlus";
import HomeActive from "../icons/footerHomeActive";

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
  box-shadow: 0 -8px 8px -2px #00ceff;
  list-style: none;

  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHomeButton = styled.div`
  /* position: fixed; */
  border: none;
  z-index: -5001;

  background: #1d1f2e;
  box-shadow: 0 -8px 8px 0px #00ceff;
  border-radius: 50%;

  left: 40%;
  bottom: -10;
  :hover {
    box-shadow: 0 -8px 8px 0px #00ebff;
  }
  /* right: 0; */
`;
const Home = styled(HomeActive)`
  z-index: 400;
`;

export default function Footer(children) {
  return (
    <>
      <StyledContainer>
        <FooterBar>
          <a href="/Plus/">
            <Plus />
          </a>
          <StyledHomeButton>
            <a href="/Home/">
              <HomeActive />
            </a>
          </StyledHomeButton>
          <a href="/List/">
            <List />
          </a>
        </FooterBar>
      </StyledContainer>
    </>
  );
}
