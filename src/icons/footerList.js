import React from "react";

export default function List() {
  return (
    <svg width="92.332" height="92.332" viewBox="0 0 92.332 92.332">
      <defs>
        <filter
          id="Path_5311"
          x="0"
          y="0"
          width="92.332"
          height="92.332"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10" result="blur" />
          {/* <feFlood flood-color="#ff0080" /> */}
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_5311)">
        <path
          id="Path_5311-2"
          data-name="Path 5311"
          d="M427.54-1289.251a3.793,3.793,0,0,0-3.792,3.792,3.793,3.793,0,0,0,3.792,3.792,3.793,3.793,0,0,0,3.792-3.792,3.793,3.793,0,0,0-3.792-3.792m-11.374,0a3.793,3.793,0,0,0-3.791,3.792,3.793,3.793,0,0,0,3.791,3.792,3.793,3.793,0,0,0,3.792-3.792,3.793,3.793,0,0,0-3.792-3.792m-11.374,0A3.793,3.793,0,0,0,401-1285.46a3.793,3.793,0,0,0,3.792,3.792,3.793,3.793,0,0,0,3.791-3.792,3.793,3.793,0,0,0-3.791-3.792m22.749-11.375a3.793,3.793,0,0,0-3.792,3.792,3.793,3.793,0,0,0,3.792,3.792,3.793,3.793,0,0,0,3.792-3.792,3.793,3.793,0,0,0-3.792-3.792m-11.374,0a3.793,3.793,0,0,0-3.791,3.792,3.793,3.793,0,0,0,3.791,3.792,3.793,3.793,0,0,0,3.792-3.792,3.793,3.793,0,0,0-3.792-3.792m-11.374,0a3.793,3.793,0,0,0-3.792,3.792,3.793,3.793,0,0,0,3.792,3.792,3.793,3.793,0,0,0,3.791-3.792,3.793,3.793,0,0,0-3.791-3.792M427.54-1312a3.793,3.793,0,0,0-3.792,3.791,3.793,3.793,0,0,0,3.792,3.792,3.793,3.793,0,0,0,3.792-3.792A3.793,3.793,0,0,0,427.54-1312m-11.374,0a3.793,3.793,0,0,0-3.791,3.791,3.793,3.793,0,0,0,3.791,3.792,3.793,3.793,0,0,0,3.792-3.792,3.793,3.793,0,0,0-3.792-3.791m-7.583,3.791a3.793,3.793,0,0,1-3.791,3.792,3.793,3.793,0,0,1-3.792-3.792,3.793,3.793,0,0,1,3.792-3.791,3.793,3.793,0,0,1,3.791,3.791"
          transform="translate(-370 1340)"
          stroke="#4F5359"
          stroke-width="1"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
}
