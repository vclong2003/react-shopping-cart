import React from "react";
import { JSX } from "react/jsx-runtime";
import * as S from "./Popup.styled";

interface IPopupProps extends JSX.IntrinsicAttributes {
  children: JSX.Element | JSX.Element[] | string | null | undefined;
  show?: boolean;
  onClose: () => void;
}

export default function Popup({
  children,
  show,
  onClose,
  ...rest
}: IPopupProps): JSX.Element {
  const handleClickContent = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <S.PopupOverlay $show={show} onClick={onClose} {...rest}>
      <S.PopupContainer onClick={handleClickContent}>
        <S.PopupHeader>
          <S.CloseButton onClick={onClose}>
            <i className="bi bi-x-circle" />
          </S.CloseButton>
        </S.PopupHeader>
        <S.PopupBody>{children}</S.PopupBody>
      </S.PopupContainer>
    </S.PopupOverlay>
  );
}
