import React, { useEffect } from "react";
import * as S from "./Notification.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { clearNotification } from "../../store/slices/notification";

const Notification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notification } = useSelector(
    (state: RootState) => state.notification,
  );

  const { message } = notification || {};

  useEffect(() => {
    if (!notification) return;

    setTimeout(() => {
      dispatch(clearNotification());
    }, 3000);
  }, [dispatch, notification]);

  return (
    <S.NotificationContainer $show={notification !== null}>
      <S.Message>{message}</S.Message>
    </S.NotificationContainer>
  );
};

export default Notification;
