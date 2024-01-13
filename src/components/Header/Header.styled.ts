import styled from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0;
  padding: var(--s-4) 0;

  background-color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: var(--shadow-md);
`;

export default { Header };
