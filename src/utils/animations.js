import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0; }
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

export const buildUp = keyframes`
 0%   { opacity:0.1; box-shadow: none;}
 10%   { opacity:0.2;box-shadow: none}
 20%   { opacity:0.3; box-shadow: 0 -8px 8px -2px #00ceff}
 30%   { opacity:0.4; box-shadow: 0 -8px 8px -2px #00ceff}
  40%   { opacity:0.5; box-shadow:none}
  50%   { opacity:0.6; background:black;}
  60%   { opacity:0.7; background:black}
  70%   { opacity:0.8; background:black}
  80%  { opacity:0.9; background:black;box-shadow: 0 -8px 8px -2px red}
  100% { opacity:1; background:black;box-shadow: 0 -8px 8px -2px red}

`;
