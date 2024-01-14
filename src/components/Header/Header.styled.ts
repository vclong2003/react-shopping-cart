import styled from "styled-components";
import { default as BaseNavList } from "./NavList/NavList";
import { DEVICES } from "../../config/responsiveBreakpoints";
import Button from "../Button/Button";
import Container from "../Container/Container";

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

const Nav = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 var(--s-4);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-semibold);
  color: var(--blue);

  @media ${DEVICES.TABLET} {
    justify-content: center;
  }
`;

const NavList = styled(BaseNavList)`
  display: none;

  @media ${DEVICES.TABLET} {
    display: flex;
  }
`;

const VerticalNavList = styled(BaseNavList)`
  flex-direction: column;
  row-gap: var(--s-6);
  margin: var(--s-6) var(--s-10);
`;

const ResponsiveNavButton = styled(Button)`
  background-color: transparent;
  font-size: var(--fs-2xl);
  padding: 0 !important;

  @media ${DEVICES.TABLET} {
    display: none;
  }
`;

const CartButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const CartIcon = styled.div`
  font-size: var(--fs-2xl);
  color: var(--blue);
`;

export {
  Header,
  Nav,
  Logo,
  NavList,
  VerticalNavList,
  ResponsiveNavButton,
  CartButton,
  CartIcon,
};
