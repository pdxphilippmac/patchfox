import React from "react";
import styled from "styled-components";
import { fadeIn } from "../utils/animations";

const StyledH1 = styled.span`
  font-size: 30px;
  font-family: futura;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00ceff, 0 0 30px #00ceff,
    0 0 40px #00ceff, 0 0 55px #00ceff, 0 0 75px #00ceff;
  text-align: center;
  animation: ${fadeIn} 3s ease-out 1 both;
  animation-iteration-count: 20;
`;
const StyledH2 = styled.span`
  font-size: 30px;
  font-family: futura;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00ceff, 0 0 30px #00ceff,
    0 0 40px #00ceff, 0 0 55px #00ceff, 0 0 75px #00ceff;
  text-align: center;
  animation: ${fadeIn} 2s ease-out 1 both;
  animation-iteration-count: 20;
  animation-delay: 0.5s;
`;

const StyledDiv = styled.div`
  text-align: center;
  padding: 10px;
`;

export default function HomeScreenLettering({ name1, name2 }) {
  return (
    <StyledDiv>
      <StyledH1>{name1}</StyledH1> <StyledH2>{name2}</StyledH2>
    </StyledDiv>
  );
}
