import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(BaseNavLink)`
  text-decoration: none;
  color: var(--gray);

  font-size: var(--fs-lg);
  font-weight: var(--fw-medium);
  transition: color 0.2s ease-in-out;

  &.active {
    color: var(--blue);
  }
`;

export { NavLink };
