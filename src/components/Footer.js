import React from "react";
import styled from "styled-components";
import Home from "../icons/footerHome";
import List from "../icons/footerList";
import Plus from "../icons/footerPlus";

const StyledContainer = styled.div`
  display: flex;
`;

const FooterBar = styled.div`
  color: #1d1f2e;
  position: absolute;
  background: #1d1f2e;
  height: 60px;
  width: 100vw;
  position: fixed;
  z-index: 10;
  box-shadow: 0 -8px 8px -2px #00ceff;

  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHomeButton = styled.div`
  position: fixed;
  border: none;
  z-index: 1;

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

export default function Footer() {
  return (
    <>
      <StyledContainer>
        <FooterBar>
          <Home />

          <StyledHomeButton>
            <Plus />
          </StyledHomeButton>
          <List />
        </FooterBar>
      </StyledContainer>
    </>
  );
}
