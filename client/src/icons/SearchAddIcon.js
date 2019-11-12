import React from "react";

export default function SearchAddIcon() {
  return (
    <svg width="93.14" height="93" viewBox="0 0 103.14 103">
      <defs>
        <filter
          id="Icon_awesome-search-plus"
          x="0"
          y="0"
          width="90.14"
          height="93"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10" result="blur" />

          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        transform="matrix(1, 0, 0, 1, 0, 0)"
        filter="url(#Icon_awesome-search-plus)"
      >
        <path
          id="Icon_awesome-search-plus-2"
          data-name="Icon awesome-search-plus"
          d="M24.935,15.748v2.625a.987.987,0,0,1-.984.984H19.357v4.593a.987.987,0,0,1-.984.984H15.748a.987.987,0,0,1-.984-.984V19.357H10.171a.987.987,0,0,1-.984-.984V15.748a.987.987,0,0,1,.984-.984h4.593V10.171a.987.987,0,0,1,.984-.984h2.625a.987.987,0,0,1,.984.984v4.593h4.593A.987.987,0,0,1,24.935,15.748ZM41.422,39.1,39.1,41.422a1.96,1.96,0,0,1-2.781,0l-8.186-8.178a1.967,1.967,0,0,1-.574-1.394V30.513a17.053,17.053,0,1,1,2.953-2.953H31.85a1.967,1.967,0,0,1,1.394.574l8.178,8.178A1.985,1.985,0,0,1,41.422,39.1ZM28.216,17.061A11.155,11.155,0,1,0,17.061,28.216,11.146,11.146,0,0,0,28.216,17.061Z"
          transform="translate(30.5 27.5)"
          stroke="#4F5359"
          stroke-width="1"
        />
      </g>
    </svg>
  );
}
