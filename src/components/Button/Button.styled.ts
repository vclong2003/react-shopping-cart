import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: var(--s-2) var(--s-4);
  border-radius: var(--br-md);
  font-size: var(--fs-md);
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

export default { Button };