import React from "react";

export default function LockSymbol() {
  return (
    <svg width="99.333" height="99.333" viewBox="0 0 99.333 99.333">
      <defs>
        <filter
          id="Path_5629"
          x="0"
          y="0"
          width="99.333"
          height="99.333"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feFlood flood-color="#00ceff" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_5629)">
        <path
          id="Path_5629-2"
          data-name="Path 5629"
          d="M810.778-1002.264l1.859,10.931h-7.273l1.859-10.931c-1.877-.861-3.676-2.746-3.676-4.948a5.453,5.453,0,0,1,5.455-5.454,5.453,5.453,0,0,1,5.453,5.454c0,2.2-1.8,4.087-3.676,4.948m-1.777-18.4A18.666,18.666,0,0,0,790.334-1002,18.667,18.667,0,0,0,809-983.333,18.667,18.667,0,0,0,827.667-1002,18.667,18.667,0,0,0,809-1020.666"
          transform="translate(-759.33 1048.67)"
          fill="none"
          stroke="#00ceff"
          stroke-width="2"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
}
