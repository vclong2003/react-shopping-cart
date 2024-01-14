import styled, { css } from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

const QuantityBtn = styled.div`
  display: flex;
  flex-direction: row;
  font-size: var(--fs-md);
  cursor: pointer;
  border-radius: var(--br-md);
  overflow: hidden;
`;

const ChangeQuantityBtn = css`
  background-color: var(--gray-light-1);
  border-radius: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`;

const MinusBtn = styled(Button)`
  ${ChangeQuantityBtn}
`;

const PlusBtn = styled(Button)`
  ${ChangeQuantityBtn}
  color: var(--orange);
`;

const QuantityInput = styled(Input)`
  width: 100%;
  text-align: center;
  font-size: var(--fs-md);
  background-color: var(--gray-light-1);
  border-radius: 0 !important;
  padding: var(--s-1) 0 !important;
  width: calc(var(--fs-md) * 2);
`;

export { QuantityBtn, MinusBtn, PlusBtn, QuantityInput };
