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
