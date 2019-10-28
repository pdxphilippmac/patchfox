import React from "react";
import styled from "styled-components";

export default function HomeIcon(className, onClick) {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="91.545"
      height="93.535"
      viewBox="0 0 91.545 93.535"
    >
      <defs>
        <filter
          id="Path_4"
          x="0"
          y="0"
          width="91.545"
          height="93.535"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10" result="blur" />

          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-136.5 -619.297)">
        <g transform="matrix(1, 0, 0, 1, 136.5, 619.3)" filter="url(#Path_4)">
          <path
            id="Path_4-2"
            data-name="Path 4"
            d="M32.607-1209.566l-11.268-10.141a3.091,3.091,0,0,0-4.133,0,2.385,2.385,0,0,0-.788,1.77v16.352h3.475a.72.72,0,0,1,.558,1.176l-4.9,5.992a.721.721,0,0,1-1.115,0l-4.9-5.992a.72.72,0,0,1,.557-1.176h3.475v-14.843l-7.626,6.862A2.793,2.793,0,0,0,5-1207.494v14.472a2.933,2.933,0,0,0,3.006,2.854H30.54a2.932,2.932,0,0,0,3-2.854v-14.472a2.793,2.793,0,0,0-.938-2.072"
            transform="translate(26.5 1249.2)"
            stroke="#4F5359"
            stroke-width="1"
            fill-rule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
}
