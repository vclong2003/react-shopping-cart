import styled from "styled-components";

interface IOverlayProps {
  $show: boolean;
}

const OffCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--white);
  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out;
  z-index: 20;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  transition: opacity 0.2s ease-in-out;
  z-index: 10;
`;

// prettier-ignore
const Overlay = styled.div<IOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition: visibility 0.2s ease-in-out;
  ${OffCanvas} {
    transform: ${(props) =>
    props.$show ? "translateX(0)" : "translateX(-100%)"};
  }
  ${Backdrop} {
    opacity: ${(props) => (props.$show ? "0.2" : "0")};
  }
`;

export { OffCanvas, Backdrop, Overlay };
