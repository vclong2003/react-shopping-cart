import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

import S from "./Header.tyled";
import Button from "../Button/Button";

export default function Header(): JSX.Element {
  return (
    <S.Header>
      <Container>
        <NavLink to="/">Home</NavLink>
      </Container>
    </S.Header>
  );
}
