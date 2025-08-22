import React from "react";

export function PlanHeroIllustration() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-labelledby="t d"
      >
        <title id="t">Isometric buildings with growth arrow</title>
        <desc id="d">
          Two gray isometric buildings on a light dome with a teal up-trending
          arrow
        </desc>

        {/* background */}
        <rect width="100%" height="100%" fill="#232323" />

        {/* dome base: true half-circle, not an ellipse */}
        <defs>
          <clipPath id="topHalf">
            <rect x="0" y="0" width="800" height="430" />
          </clipPath>
        </defs>
        <g clipPath="url(#topHalf)">
          <circle cx="400" cy="430" r="210" fill="#F2F1E8" />
        </g>

        {/* ===== Small building (left) ===== */}
        {/* removed scale(); increased vertical proportions */}
        <g transform="translate(270,320)">
          {/* roof */}
          <polygon points="0,-60 92,-24 0,12 -92,-24" fill="#BDBDBD" />
          {/* walls */}
          <polygon
            id="smallLeft"
            points="-92,-24 -92,188 0,228 0,12"
            fill="#6E6E6E"
          />
          <polygon
            id="smallRight"
            points="0,12 0,228 92,188 92,-24"
            fill="#8F8F8F"
          />

          <clipPath id="clipSmallLeft">
            <use href="#smallLeft" />
          </clipPath>
          <clipPath id="clipSmallRight">
            <use href="#smallRight" />
          </clipPath>

          {/* windows */}
          <g clipPath="url(#clipSmallLeft)" opacity="0.6">
            <rect x="-94" y="6" width="110" height="8" fill="#9BA3AA" />
            <rect x="-94" y="38" width="110" height="8" fill="#9BA3AA" />
            <rect x="-94" y="70" width="110" height="8" fill="#9BA3AA" />
            <rect x="-94" y="102" width="110" height="8" fill="#9BA3AA" />
            <rect x="-94" y="134" width="110" height="8" fill="#9BA3AA" />
          </g>
          <g clipPath="url(#clipSmallRight)" opacity="0.7">
            <rect x="-2" y="10" width="96" height="8" fill="#C9D4D7" />
            <rect x="-2" y="42" width="96" height="8" fill="#C9D4D7" />
            <rect x="-2" y="74" width="96" height="8" fill="#C9D4D7" />
            <rect x="-2" y="106" width="96" height="8" fill="#C9D4D7" />
            <rect x="-2" y="138" width="96" height="8" fill="#C9D4D7" />
          </g>
        </g>

        {/* ===== Tall building (right) ===== */}
        <g transform="translate(520,200)">
          {/* roof */}
          <polygon points="0,-90 78,-56 0,-22 -78,-56" fill="#D6D6D6" />
          {/* walls */}
          <polygon
            id="tallLeft"
            points="-78,-56 -78,276 0,312 0,-22"
            fill="#7B7B7B"
          />
          <polygon
            id="tallRight"
            points="0,-22 0,312 78,276 78,-56"
            fill="#A3A3A3"
          />

          <clipPath id="clipTallLeft">
            <use href="#tallLeft" />
          </clipPath>
          <clipPath id="clipTallRight">
            <use href="#tallRight" />
          </clipPath>

          {/* windows */}
          <g clipPath="url(#clipTallLeft)" opacity="0.6">
            <rect x="-80" y="-2" width="116" height="10" fill="#9BA3AA" />
            <rect x="-80" y="30" width="116" height="10" fill="#9BA3AA" />
            <rect x="-80" y="62" width="116" height="10" fill="#9BA3AA" />
            <rect x="-80" y="94" width="116" height="10" fill="#9BA3AA" />
            <rect x="-80" y="126" width="116" height="10" fill="#9BA3AA" />
            <rect x="-80" y="158" width="116" height="10" fill="#9BA3AA" />
            <rect x="-80" y="190" width="116" height="10" fill="#9BA3AA" />
            <rect x="-80" y="222" width="116" height="10" fill="#9BA3AA" />
            <rect x="-80" y="254" width="116" height="10" fill="#9BA3AA" />
          </g>
          <g clipPath="url(#clipTallRight)" opacity="0.8">
            <rect x="-2" y="-6" width="100" height="10" fill="#D9E1E3" />
            <rect x="-2" y="26" width="100" height="10" fill="#D9E1E3" />
            <rect x="-2" y="58" width="100" height="10" fill="#D9E1E3" />
            <rect x="-2" y="90" width="100" height="10" fill="#D9E1E3" />
            <rect x="-2" y="122" width="100" height="10" fill="#D9E1E3" />
            <rect x="-2" y="154" width="100" height="10" fill="#D9E1E3" />
            <rect x="-2" y="186" width="100" height="10" fill="#D9E1E3" />
            <rect x="-2" y="218" width="100" height="10" fill="#D9E1E3" />
            <rect x="-2" y="250" width="100" height="10" fill="#D9E1E3" />
          </g>
        </g>

        {/* growth arrow */}
        <defs>
          <marker
            id="arrowhead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#0EA5A0" />
          </marker>
        </defs>
        <polyline
          points="210,470 250,430 330,365 360,385 465,250 505,175"
          fill="none"
          stroke="#0EA5A0"
          strokeWidth={10}
          strokeLinejoin="round"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  );
}
