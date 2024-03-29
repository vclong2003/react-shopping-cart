import styled from "styled-components";

interface IButtonProps {
  disabled?: boolean;
}

const Button = styled.button<IButtonProps>`
  padding: var(--s-2) var(--s-4);
  border-radius: var(--br-md);
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export { Button };
