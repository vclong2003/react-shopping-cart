import styled, { css } from "styled-components";
import Button from "../Button/Button";
import { default as BaseInput } from "../Input/Input";

const QuantityInput = styled.div`
  display: flex;
  flex-direction: row;
  font-size: var(--fs-md);
  cursor: pointer;
  border-radius: var(--br-md);
  overflow: hidden;
`;

interface IChangeValueBtnProps {
  disabled?: boolean;
}

const ChangeValueBtn = styled(Button)<IChangeValueBtnProps>`
  background-color: var(--gray-light-1);
  border-radius: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  font-size: var(--fs-md);
  color: ${({ disabled }) => (disabled ? "var(--gray)" : "var(--orange)")};
`;

const Input = styled(BaseInput)`
  width: auto;
  text-align: center;
  font-size: var(--fs-md);
  background-color: var(--gray-light-1);
  border-radius: 0 !important;
  padding: var(--s-1) 0 !important;
  width: calc(var(--fs-md) * 2);
`;

export { QuantityInput, ChangeValueBtn, Input };
