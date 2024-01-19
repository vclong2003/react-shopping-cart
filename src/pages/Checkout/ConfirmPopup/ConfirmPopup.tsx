import React from "react";
import * as S from "./ConfirmPopup.styled";
import Popup from "../../../components/Popup/Popup";

interface IConfirmPopupProps {
  show: boolean;
  onCheckout: () => void;
  onCancel: () => void;
}

export default function ConfirmPopup({
  show,
  onCheckout,
  onCancel,
}: IConfirmPopupProps): JSX.Element {
  return (
    <Popup show={show} onClose={onCancel}>
      <S.PopupContent>
        <S.TextContent>Do you want to purchase 🤔?</S.TextContent>
        <S.BtnCancel onClick={onCancel}>No</S.BtnCancel>
        <S.BtnCheckout onClick={onCheckout}>Yes</S.BtnCheckout>
      </S.PopupContent>
    </Popup>
  );
}
