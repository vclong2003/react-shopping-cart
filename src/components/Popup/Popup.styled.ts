import styled from "styled-components";
import Button from "../Button/Button";

interface IPopupOverlayProps {
  $show?: boolean;
}

const PopupOverlay = styled.div<IPopupOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black-opacity);

  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  max-height: 80%;
  margin: 0 var(--s-8);
  background-color: var(--white);
  padding: var(--s-5);
  border-radius: var(--br-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

const PopupHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const PopupBody = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const CloseButton = styled(Button)`
  background-color: transparent;
  font-size: var(--fs-3xl);
  color: var(--blue);
  padding: 0;
  margin-bottom: var(--s-2);
`;

export { PopupOverlay, PopupContainer, PopupHeader, PopupBody, CloseButton };
