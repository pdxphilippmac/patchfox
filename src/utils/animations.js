import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }

`;

export const blendInHome = keyframes`
  0%    { opacity:0; }
  10%{ opacity:0.2;   box-shadow: 0 -8px 8px -2px #FF0080}
  20%{ opacity:0.3;box-shadow: 0 -8px 8px -2px #FF0080
   }
  30%   { opacity:0.5; }
  50%  { opacity:0.6; }
  100% { opacity:1; }

`;

export const flicker = keyframes`
  0%   { opacity:1; }
  6%   { opacity:1; }
  7.5%   { opacity:0; }
  16.5%   { opacity:1; }
  30%   { opacity:0; }
  100%   { opacity:1; }

`;
