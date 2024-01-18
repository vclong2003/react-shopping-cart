import styled, { css } from "styled-components";
import Button from "../../../components/Button/Button";

const PopupContent = styled.div`
  text-align: center;
  padding: 0 var(--s-5);
`;
const TextContent = styled.p`
  margin-bottom: var(--s-3);
`;

const PopupBtn = css`
  font-size: var(--fs-lg);
  margin: var(--s-1);
  padding: var(--s-2) var(--s-6);
`;

const BtnCheckout = styled(Button)`
  ${PopupBtn}
  background-color: var(--blue);
  color: var(--white);
`;

const BtnCancel = styled(Button)`
  ${PopupBtn}
`;

export { PopupContent, TextContent, BtnCheckout, BtnCancel };
