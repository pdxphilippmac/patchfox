import React from "react";

export default function LogoLetter() {
  return (
    <svg width="344" height="174" viewBox="0 0 344 174">
      <defs>
        <filter
          id="PatchFox"
          x="0"
          y="0"
          width="344"
          height="174"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feFlood flood-color="#00ceff" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="PatchFox-2"
          x="0"
          y="0"
          width="344"
          height="174"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur-2" />
          <feFlood flood-color="#00ceff" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="UpdateNowWhite"
          x="30"
          y="30"
          width="284"
          height="114"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur-3" />
          <feFlood flood-color="#00ceff" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Group_50" data-name="Group 50" transform="translate(-23.5 -201.5)">
        <g id="Group_9" data-name="Group 9" transform="translate(47 -111)">
          <g
            transform="matrix(1, 0, 0, 1, -23.5, 312.5)"
            filter="url(#PatchFox)"
          >
            <text
              id="PatchFox-3"
              data-name="PatchFox"
              transform="translate(40.5 110.5)"
              fill="#fff"
              stroke="rgba(0,206,255,0.56)"
              stroke-width="25"
              font-size="61"
              font-family="Futura-Medium, Futura"
              font-weight="500"
            >
              <tspan x="0" y="0">
                PatchFox
              </tspan>
            </text>
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -23.5, 312.5)"
            filter="url(#PatchFox-2)"
          >
            <text
              id="PatchFox-4"
              data-name="PatchFox"
              fill="#fff"
              stroke="rgba(0,206,255,0.56)"
              transform="translate(40.5 110.5)"
              stroke-width="25"
              font-size="61"
              font-family="Futura-Medium, Futura"
              font-weight="500"
              opacity="0.545"
            >
              <tspan x="0" y="0">
                PatchFox
              </tspan>
            </text>
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -23.5, 312.5)"
            filter="url(#UpdateNowWhite)"
          >
            <text
              id="UpdateNowWhite-2"
              data-name="UpdateNowWhite"
              transform="translate(40.5 110.5)"
              fill="#fff"
              stroke="rgba(255,0,128,0)"
              stroke-width="10"
              font-size="61"
              font-family="Futura-Medium, Futura"
              font-weight="500"
            >
              <tspan x="0" y="0">
                PatchFox
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
