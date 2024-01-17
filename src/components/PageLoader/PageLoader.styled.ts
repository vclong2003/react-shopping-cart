import styled, { keyframes } from "styled-components";
import Container from "../Container/Container";

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

const Loader = styled(Container)`
  position: fixed;
  top: 0;
  background-color: var(--black-opacity);
  color: var(--fg);
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

const CartTop = styled.polyline`
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

const CartWheelStroke = styled.circle`
  animation: ${Cart_Lines} 2s ease-in-out infinite;
  animation-name: ${Cart_Wheel_Stroke};
`;

const CartTrack = styled.g`
  stroke: hsla(var(--hue), 10%, 10%, 0.1);
  transition: stroke var(--trans-dur);
`;

export {
  Loader,
  PreLoader,
  Cart,
  CartLines,
  CartTop,
  CartWheel1,
  CartWheel2,
  CartWheelStroke,
  CartTrack,
};
