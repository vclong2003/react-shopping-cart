import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

interface INotificationContainerProps {
  $show?: boolean;
}

export const NotificationContainer = styled.div<INotificationContainerProps>`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  background-color: var(--green);
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
