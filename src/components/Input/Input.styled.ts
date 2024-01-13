import styled from "styled-components";

const Input = styled.input`
  padding: var(--s-2) var(--s-3);
  font-size: var(--fs-md);
  color: var(--black);
  background-color: var(--gray-light);
  border-radius: var(--br-md);
  transition: background-color 0.2s ease-in-out;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const S = { Input };
export default S;
