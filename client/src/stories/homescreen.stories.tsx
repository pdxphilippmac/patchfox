import React from "react";
import styled from "styled-components";
import HomescreenLogo from "../icons/homescreenLogo";
import LockSymbol from "../icons/lockSymbol";
import LogoLetter from "../icons/homescreenLettering";
import AlternativeLogoLetter from "../icons/alternateHomescreenLettering";
import NeonGlow from "../components/NeonGlow";
import AlterNeonGlow from "../components/AlterNeonGlow";
import AlterHomescreenLogo from "../icons/AlterHomescreenLogo";
import HomescreenPasswordInput from "../components/HomeScreenLogin";
import UpdateNotification from "../icons/UpdateNotification";

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
export const UpsideDownLogo = () => <AlterHomescreenLogo />;
export const SignInLogo = () => <LockSymbol />;

export const GlowLogo = () => <NeonGlow />;
export const AlterGlowLogo = () => <AlterNeonGlow />;

export const HomeScreenInput = () => (
  <HomescreenPasswordInput></HomescreenPasswordInput>
);
export const Notification = () => <UpdateNotification />;
