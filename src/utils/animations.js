import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }

`;
export const turner = keyframes`
  from {
    transform: rotateY(0deg)
    translate:rotateY(20deg);
  }
  to {
    transform: rotateY(360deg);
  }
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
  10.5%   { opacity:1; }
  11%   { opacity:0; }
  12%   { opacity:1;}
  45%   { opacity:1; }
  50%   { opacity:1; }
  55%   { opacity:1; }
  60%   { opacity:1; }
  65%   { opacity:1; }
  70%   { opacity:1; }
  80%   { opacity:1; }
  85%   { opacity:1; }
  90%   { opacity:1; }
  91%   { opacity:0; }
  92%   { opacity:1; }
  93%   { opacity:0; }
  94%   { opacity:1; }
  100%   { opacity:1; }


`;

export const flickerAlter = keyframes`
  0%   { opacity:1; }
  6%   { opacity:1; }
  7.5%   { opacity:1; }
  10.5%   { opacity:1; }
  11%   { opacity:1; }
  12%   { opacity:1;}
  45%   { opacity:1; }
  50%   { opacity:1; }
  51%   { opacity:0; }
  51.5%   { opacity:1; }
  52%   { opacity:0; }
  52.5%   { opacity:1; }
  64%   { opacity:0; }
  64.5%   { opacity:1; }
  65%   { opacity:1; }
  70%   { opacity:1; }
  80%   { opacity:1; }
  85%   { opacity:1; }
  90%   { opacity:1; }
  90.5%   { opacity:0; }
  91%   { opacity:1; }
  91.5%   { opacity:0; }
  92%   { opacity:1; }
  100%   { opacity:1; }


`;

// export const buildUpFooter = keyframes`
//  0%   { opacity:0.1; box-shadow: none;}
//  10%   { opacity:0.2;box-shadow: none}
//  20%   { opacity:0.3; box-shadow: 0 -20px 20px -12px #F26513}
//  30%   { opacity:0.4; box-shadow: 0 -20px 20px -12px #F26513}
//   40%   { opacity:0.5; box-shadow:none}
//   50%   { opacity:0.6; background:#4F5359;}
//   60%   { opacity:0.7; background:#4F5359}
//   70%   { opacity:0.8; background:##110B09}
//   80%  { opacity:0.9; background:##110B09;box-shadow: 0 -28px 28px -22px #D2590B}
//   100% { opacity:1; background:##110B09;box-shadow: 0 -4px 4px -2px #D2590B; }

// `;

export const buildUpFooter = keyframes`
 0%   { opacity:0.1; box-shadow: none;}
 10%   { opacity:0.2;box-shadow: none}
 20%   { opacity:0.3; box-shadow: 0 -20px 20px -12px #00a1c7}
 30%   { opacity:0.4; box-shadow: 0 -20px 20px -12px #00a1c7}
  40%   { opacity:0.5; box-shadow:none}
  50%   { opacity:0.6; background:#4F5359;}
  60%   { opacity:0.7; background:#4F5359}
  70%   { opacity:0.8; background:##110B09};
  80%  { opacity:0.9; background:##110B09;box-shadow: 0 -48px 48px -42px #b9f1ff}
  100% { opacity:1; background:##110B09;box-shadow: 0 -4px 4px -2px #00ceff; }

`;
export const logoBuildUp = keyframes`
0%   { opacity:0; }
10%   { opacity:0.2;  }
20%   { opacity:0.3 ; }
30%   { opacity:0.4; }
40%   { opacity:0.5; }
50%   { opacity:0.6; }
60%   { opacity:0.7; }
70%   { opacity:0.8;  }
80%   { opacity:0.9;  }
90%   { opacity:0.95;  }
100%   { opacity:1  }

`;
export const buildList = keyframes`
 0%   { opacity:0.1; box-shadow: none; }
 10%   { opacity:0.2;box-shadow: none; }
 20%   { opacity:0.3; box-shadow: 0 8px 8px 0px orange}
 30%   { opacity:0.4; box-shadow: 0 10px 10px 0px orange}
  40%   { opacity:0.5; box-shadow:none}
  50%   { opacity:0.6; ;}
  60%   { opacity:0.7; }
  70%   { opacity:0.8; k}
  80%  { opacity:0.9; box-shadow: 0 8px 8px 0px red; }
  100% { opacity:1; box-shadow: 0 1px 1px 0px red}

`;

export const searchItem = keyframes`
 0%   { opacity:0.1; box-shadow: none;}
 10%   { opacity:0.2;box-shadow: none}
 20%   { opacity:0.3; box-shadow:none}
 30%   { opacity:0.4; box-shadow: 0  8px 8px -2px orange}
  40%   { opacity:0.5; box-shadow: 0  8px 8px -2px orange}
  50%   { opacity:0.6; background:black;}
  60%   { opacity:0.7; background:black}
  70%   { opacity:0.8; background:black}
  80%  { opacity:0.9; background:black;box-shadow: 0  8px 8px -2px red}
  100% { opacity:1; background:black;box-shadow: 0  8px 8px -2px red}

`;

export const dodgeArea = keyframes`
  to {
    transform: translate(50%, 50%);
  }

  `;

export const loadingMotion = keyframes`
 0%   {opacity: 0.9; right: 0px; top: 0px;}
  25%  {opacity: 0.7; right: 50px; top: 50px;}
  50%  {opacity: 0.5; right: 0px; top: 50px;}
  75%  {opacity: 0.3; right: 50px; top: 0px;}
  100% {opacity: 0.1; right: 0px; top: 0px;}

`;
