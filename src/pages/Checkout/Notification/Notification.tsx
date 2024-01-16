// Notification.tsx
import React from "react";
import * as S from "./Notification.styled";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <S.NotificationContainer>
      <S.CloseButton
        onClick={onClose}
        className="bi bi-x-circle"
      ></S.CloseButton>
      <S.Message>{message}</S.Message>
    </S.NotificationContainer>
  );
};

export default Notification;
