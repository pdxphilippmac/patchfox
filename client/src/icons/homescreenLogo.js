import React from "react";
import styled from "styled-components";
import { buildUp } from "../utils/animations";

const StyledLogodiv = styled.div`
  justify-content: center;
  display: flex;
  animation: ${buildUp} 6s ease-out 1 both;
`;

export default function HomescreenLogo() {
  return (
    <StyledLogodiv>
      <svg width="91.196" height="105.017" viewBox="0 0 91.196 105.017">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="0.698"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#00f5ff" />
            <stop offset="1" stop-color="#800040" />
          </linearGradient>
        </defs>
        <path
          id="Subtraction_4"
          data-name="Subtraction 4"
          d="M99.753,152.018h0L84.7,143.623l9.836-18.638,18.335,19.1-13.115,7.936Zm15.021-9.09L95.6,122.959l10.224-19.374,9.549-18.095,22.239,30.788-8.267,17.832-14.572,8.818ZM82.9,142.622h0L71.99,136.538,81.2,111.095l11.836,12.328Zm-12.664-7.06h0l-16.106-8.979-.747-44.455L79.668,109.5Zm62.121-3.274v0l6.574-14.18,5.129,7.1-11.7,7.081Zm12.085-10.253v0l-4.464-6.18,4.209-9.079.256,15.259ZM94.1,121.4h0L82.022,108.815l16.755-46.3,15.255,21.118L94.1,121.4Zm44.557-7.373L116.5,83.353,127.116,63.24l16.495,9.2.5,29.826-5.453,11.762Zm-58.166-6.8h0L53.33,78.931l-.082-4.858L90.74,51.387l6.635,9.185L80.493,107.223Zm34.667-25.73h0L99.669,60.048l3.647-10.078,22,12.268L115.16,81.493ZM98.266,58.107h0L92.6,50.262,97.988,47l3.576,1.994-3.3,9.112Z"
          transform="translate(-53.249 -47.001)"
          fill="url(#linear-gradient)"
        />
      </svg>
    </StyledLogodiv>
  );
}
