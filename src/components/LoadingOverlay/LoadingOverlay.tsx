import React from "react";
import * as S from "./LoadingAnimation.styled";

export default function LoadingOverlay() {
  return (
    <S.LoadingOverlay>
      <S.PreLoader>
        <S.Cart
          role="img"
          aria-label="Shopping cart line animation"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          >
            <S.CartTrack stroke="hsla(0,10%,10%,0.1)">
              <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
              <circle cx="43" cy="111" r="13" />
              <circle cx="102" cy="111" r="13" />
            </S.CartTrack>
            <S.CartLines stroke="currentColor">
              <S.CartTop
                points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                $strokeDasharray="338 338"
                $strokeDashoffset="-338"
              />
              <S.CartWheel1 transform="rotate(-90,43,111)">
                <S.CartWheelStroke
                  cx="43"
                  cy="111"
                  r="13"
                  $strokeDasharray="81.68 81.68"
                  $strokeDashoffset="81.68"
                />
              </S.CartWheel1>
              <S.CartWheel2 transform="rotate(90,102,111)">
                <S.CartWheelStroke
                  cx="102"
                  cy="111"
                  r="13"
                  $strokeDasharray="81.68 81.68"
                  $strokeDashoffset="81.68"
                />
              </S.CartWheel2>
            </S.CartLines>
          </g>
        </S.Cart>
      </S.PreLoader>
    </S.LoadingOverlay>
  );
}
