import React from "react";
import * as S from "./NavList.styled";

import NavItem from "../NavItem/NavItem";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Reviews", path: "/reviews" },
];

export default function NavList(props: JSX.IntrinsicAttributes): JSX.Element {
  return (
    <S.NavList {...props}>
      {NAV_LINKS.map(({ name, path }) => (
        <NavItem key={path} title={name} to={path} />
      ))}
    </S.NavList>
  );
}
