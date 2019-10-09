import React from "react";
import styled from "styled-components";
import HomescreenLogo from "../icons/homescreenLogo";
import LockSymbol from "../icons/lockSymbol";
import LogoLetter from "../icons/homescreenLettering";
import AlternativeLogoLetter from "../icons/alternateHomescreenLettering";

const Background = styled.div`
  background: darkgray;
`;

export default {
  title: "HomeScreen"
};

export const HomescreenLettering = () => (
  <Background>
    <LogoLetter />
  </Background>
);

export const AlternativeHomescreenLettering = () => (
  <Background>
    <AlternativeLogoLetter />
  </Background>
);

export const Logo = () => <HomescreenLogo />;
export const SignInLogo = () => <LockSymbol />;
