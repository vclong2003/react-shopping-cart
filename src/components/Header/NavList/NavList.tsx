import { layoutRoutes } from "../../../routes/layoutRoutes";
import NavItem from "../NavItem/NavItem";

import * as S from "./NavList.styled";

export default function NavList(props: JSX.IntrinsicAttributes): JSX.Element {
  return (
    <S.NavList {...props}>
      {layoutRoutes.map(({ name, path }) => (
        <NavItem key={path} title={name} to={path} />
      ))}
    </S.NavList>
  );
}
