import React from "react";

export default function PlusIcon(className) {
  return (
    <svg
      className={className}
      width="92.332"
      height="92.332"
      viewBox="0 0 92.332 92.332"
    >
      <defs>
        <filter
          id="Path_5335"
          x="0"
          y="0"
          width="92.332"
          height="92.332"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10" result="blur" />
          {/* <feFlood flood-color="#FF0080" /> */}
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_5335)">
        <path
          id="Path_5335-2"
          data-name="Path 5335"
          d="M429.815-2963.351H417.682v-12.133a1.517,1.517,0,0,0-1.517-1.517,1.517,1.517,0,0,0-1.517,1.517v12.133H402.517a1.517,1.517,0,0,0-1.517,1.517,1.517,1.517,0,0,0,1.517,1.517h12.133v12.132a1.516,1.516,0,0,0,1.517,1.517,1.516,1.516,0,0,0,1.517-1.517v-12.132h12.133a1.517,1.517,0,0,0,1.517-1.517,1.517,1.517,0,0,0-1.517-1.517"
          transform="translate(-370 3005)"
          // fill="none"
          stroke="#4F5359"
          stroke-width="1"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
}
