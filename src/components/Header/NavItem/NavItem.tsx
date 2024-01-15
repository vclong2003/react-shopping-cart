import React from "react";
import * as S from "./NavItem.styled";

interface INavItemProps {
  title: string;
  to: string;
}

export default function NavItem({ title, to }: INavItemProps): JSX.Element {
  return <S.NavLink to={to}>{title}</S.NavLink>;
}
