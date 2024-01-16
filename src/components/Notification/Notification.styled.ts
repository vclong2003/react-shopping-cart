import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";
import { ENotificationType } from "../../enum";
import { getNotificationBg } from "../../utils/notification.utils";

interface INotificationContainerProps {
  $show?: boolean;
  $type?: ENotificationType;
}

export const NotificationContainer = styled.div<INotificationContainerProps>`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  background-color: ${({ $type }) => getNotificationBg($type)};
  box-shadow: var(--shadow-md);
  color: var(--white);
  padding: var(--s-3);
  margin: var(--s-3);
  border-radius: var(--s-1);
  position: fixed;
  z-index: 10;
  @media ${DEVICES.PHONE} {
    top: var(--s-2);
    left: var(--s-2);
    bottom: unset;
    right: unset;
  }
  @media ${DEVICES.TABLET} {
    bottom: var(--s-2);
    right: var(--s-2);
    top: unset;
    left: unset;
  }
`;

export const Message = styled.p``;
