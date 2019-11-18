import React from "react";

export default function UpdateNotification() {
  return (
    <svg width="36.332" height="36.67" viewBox="0 0 36.332 36.67">
      <defs>
        <filter
          id="Path_5010"
          x="0"
          y="0"
          width="36.332"
          height="36.67"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="5" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feFlood flood-color="#00ebff" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_5010)">
        <path
          id="Path_5010-2"
          data-name="Path 5010"
          d="M17.166-1405.11a1.708,1.708,0,0,1-1.694-1.723,1.708,1.708,0,0,1,1.694-1.722,1.708,1.708,0,0,1,1.694,1.722A1.708,1.708,0,0,1,17.166-1405.11Zm1.13,9.187a1.143,1.143,0,0,1-1.13,1.148,1.143,1.143,0,0,1-1.13-1.148v-6.89a1.142,1.142,0,0,1,1.13-1.148,1.142,1.142,0,0,1,1.13,1.148ZM17.166-1412A10.251,10.251,0,0,0,7-1401.665a10.251,10.251,0,0,0,10.166,10.335,10.251,10.251,0,0,0,10.166-10.335A10.251,10.251,0,0,0,17.166-1412Z"
          transform="translate(35.33 -1388.33) rotate(180)"
          fill="rgba(255,255,255,0.25)"
          stroke="#fff"
          stroke-width="1"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
}
