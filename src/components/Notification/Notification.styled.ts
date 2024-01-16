import styled from "styled-components";

export const NotificationContainer = styled.div`
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

export const CloseButton = styled.button`
  background-color: transparent;
  color: var(--white);
  margin-bottom: var(--s-2);
  cursor: pointer;
  float: right;
`;
