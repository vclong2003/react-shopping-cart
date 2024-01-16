import styled from "styled-components";

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
  bottom: var(--s-2);
  right: var(--s-9);
`;

export const Message = styled.p``;
