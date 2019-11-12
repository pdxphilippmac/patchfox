import React from "react";
import styled from "styled-components";
import List from "../icons/footerList";
import SearchAddIcon from "../icons/SearchAddIcon";
import { NavLink } from "react-router-dom";
import HomeIcon from "../icons/footerHome";
import FlexContainer from "../components/FlexContainer";
import { buildUpFooter } from "../utils/animations";
import NewsIcon from "../icons/footerNewsIcon";

const FooterBar = styled.nav``;

const FooterBarAnimated = styled.nav`
  color: #4f5359;
  position: absolute;
  background: ${({ theme }) => theme.footer};
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
  justify-content: space-between;
  animation: ${buildUpFooter} 3s ease-out 1 both;
  animation-delay: 4s;
`;

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

export default function Footer() {
  return (
    <>
      <FlexContainer>
        <FooterBar className="navbar-list">
          <FooterBarAnimated>
            <StyledNavLink to="/home" activeClassName="chosen">
              <HomeIcon activeClassName="chosen" />
            </StyledNavLink>
            <StyledNavLink to="/news" activeClassName="chosen">
              <NewsIcon activeClassName="chosen" />
            </StyledNavLink>

            <StyledNavLink to="/library" activeClassName="chosen">
              <List activeClassName="chosen" />
            </StyledNavLink>
            <StyledNavLink to="/browsegames" activeClassName="chosen">
              <SearchAddIcon activeClassName="chosen" />
            </StyledNavLink>
          </FooterBarAnimated>
        </FooterBar>
      </FlexContainer>
    </>
  );
}
