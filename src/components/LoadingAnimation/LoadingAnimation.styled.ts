import styled, { keyframes } from "styled-components";

const Cart_Lines = keyframes`
from,
to {
  opacity: 0;
}
8%,
92% {
  opacity: 1;
}
`;

const Cart_Top = keyframes`
from {
    stroke-dashoffset: -338;
  }
  50% {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 338;
  }
`;

const Cart_Wheel1 = keyframes`
from {
    transform: rotate(-0.25turn);
  }
  to {
    transform: rotate(2.75turn);
  }
`;

const Cart_Wheel2 = keyframes`
from {
    transform: rotate(0.25turn);
  }
  to {
    transform: rotate(3.25turn);
  }
`;

const Cart_Wheel_Stroke = keyframes`
from,
    to {
      stroke-dashoffset: 81.68;
    }
    50% {
      stroke-dashoffset: 40.84;
    }
`;

const LoadingAnimation = styled.div`
  position: fixed;
  top: 0;
  background-color: var(--black-opacity);
  color: var(--fg);
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const PreLoader = styled.div`
  text-align: center;
  max-width: 20em;
  width: 100%;
`;

const Cart = styled.svg`
  display: block;
  margin: 0 auto 1.5em auto;
  width: 8em;
  height: 8em;
`;

const CartLines = styled.g`
  animation: ${Cart_Lines} 2s ease-in-out infinite;
  stroke: var(--primary);
`;

interface ICartTop {
  points: string;
  $strokeDasharray: string;
  $strokeDashoffset: string;
}
const CartTop = styled.polyline.attrs<ICartTop>((props) => ({
  points: props.points,
  strokeDasharray: props.$strokeDasharray,
  strokeDashoffset: props.$strokeDashoffset,
}))`
  animation: ${Cart_Lines} 2s ease-in-out infinite;
  animation-name: ${Cart_Top};
`;

const CartWheel1 = styled.g`
  animation: ${Cart_Lines} 2s ease-in-out infinite;
  animation-name: ${Cart_Wheel1};
  transform: rotate(-0.25turn);
  transform-origin: 43px 111px;
`;

const CartWheel2 = styled.g`
  animation: ${Cart_Lines} 2s ease-in-out infinite;
  animation-name: ${Cart_Wheel2};
  transform: rotate(0.25turn);
  transform-origin: 102px 111px;
`;

interface ICartWheelStroke {
  cx: string;
  cy: string;
  r: string;
  $strokeDasharray: string;
  $strokeDashoffset: string;
}

const CartWheelStroke = styled.circle.attrs<ICartWheelStroke>((props) => ({
  cx: props.cx,
  cy: props.cy,
  r: props.r,
  strokeDasharray: props.$strokeDasharray,
  strokeDashoffset: props.$strokeDashoffset,
}))`
  animation: ${Cart_Lines} 2s ease-in-out infinite;
  animation-name: ${Cart_Wheel_Stroke};
`;

const CartTrack = styled.g`
  stroke: hsla(var(--hue), 10%, 10%, 0.1);
  transition: stroke var(--trans-dur);
`;

export {
  LoadingAnimation,
  PreLoader,
  Cart,
  CartLines,
  CartTop,
  CartWheel1,
  CartWheel2,
  CartWheelStroke,
  CartTrack,
};
