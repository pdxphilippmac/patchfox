import React from "react";
import styled from "styled-components";
import { flicker, flickerAlter } from "../utils/animations";

const StyledH1 = styled.span`
  font-size: 60px;
  font-family: futura;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #00ceff,
    0 0 40px #00ceff, 0 0 55px #00ceff, 0 0 75px #00ceff;
  text-align: center;
  /* animation: ${flicker} 30s ease-in infinite both; */
  animation-iteration-count: 20;
`;
const StyledH2 = styled.span`
  font-size: 60px;
  font-family: futura;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #00ceff,
    0 0 40px #00ceff, 0 0 55px #00ceff, 0 0 75px #ff0080;
  text-align: center;
  animation: ${flicker} 5s ease-out infinite both;
  animation-iteration-count: 20;
  animation-delay: 2s;
`;
const StyledH3 = styled.span`
  font-size: 60px;
  font-family: futura;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00ceff, 0 0 30px #00ceff,
    0 0 40px #00ceff, 0 0 55px #00ceff, 0 0 75px;
  text-align: center;
  animation: ${flickerAlter} 5s ease-in infinite both;
  animation-iteration-count: 20;
  animation-delay: 5s;
`;

const StyledDiv = styled.div`
  text-align: center;
  padding: 20px;
`;

export default function NeonGlow() {
  return (
    <StyledDiv>
      <StyledH3>P</StyledH3>
      <StyledH1>at</StyledH1>

      <StyledH1>ch</StyledH1>

      <StyledH1>F</StyledH1>
      <StyledH2>o</StyledH2>
      <StyledH1>x</StyledH1>
    </StyledDiv>
  );
}
