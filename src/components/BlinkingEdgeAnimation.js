import React from "react";
import styled from "styled-components";
import { dodgeArea } from "../utils/animations";
const StyledHeader = styled.header`
  z-index: 10;
  flex-shrink: 0;
  font-size: 14px;
  align-items: center;
  background-color: ${props => props.theme.main};
  text-transform: uppercase;

  text-shadow: 5px 5px 5px purple;
  height: 15px;
  justify-content: center;
  padding: 1px;
`;

const Wrapper = styled.div`
  /* height: 800px; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
`;
const NeonWrapper = styled.div`
  display: inline-flex;
  filter: brightness(200%);
  overflow: hidden;
`;

const Text = styled.span`
  color: #ffffff;
  background: #000000;
  font-size: 40px;
  font-weight: bold;
  font-family: Arial;
  text-transform: uppercase;
`;

const Gradient = styled.span`
  background-image: linear-gradient(
    225deg,
    #ea00d9 0%,
    #711c91 50%,
    #2b86c5 100%
  );

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
`;

const Dodge = styled.span`
  background: radial-gradient(circle, white, black 35%) center / 25% 25%;
  position: absolute;
  top: -100%;
  left: -100%;
  right: 0;
  bottom: 0;
  mix-blend-mode: color-dodge;
  animation: ${dodgeArea} 5s linear infinite;
`;

function BlinkingEdge() {
  return (
    <>
      <StyledHeader>
        <Wrapper>
          <NeonWrapper>
            <Text>Loading</Text>
            <Gradient></Gradient>
            <Dodge></Dodge>
          </NeonWrapper>
        </Wrapper>
      </StyledHeader>
    </>
  );
}

export default BlinkingEdge;
