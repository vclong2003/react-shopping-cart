import React, { useEffect } from "react";
import * as S from "./Notification.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { clearNotification } from "../../store/slices/notification";

const Notification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notification } = useSelector(
    (state: RootState) => state.notificationState,
  );

  const { message, type } = notification || {};

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      dispatch(clearNotification());
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, notification]);

  return (
    <S.NotificationContainer $type={type} $show={notification !== null}>
      <S.Message>{message}</S.Message>
    </S.NotificationContainer>
  );
};

export default Notification;
