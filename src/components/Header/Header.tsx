import Container from "../Container/Container";

import S from "./Header.styled";
import Badge from "../Badge/Badge";
import OffCanvas from "../OffCanvas/OffCanvas";
import { useState } from "react";
import Button from "../Button/Button";
import NavItem from "./NavItem/NavItem";
import NavList from "./NavList/NavList";

export default function Header(): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <S.Header>
      <Container className="nav">
        <Button
          className="btn"
          onClick={() => {
            setShow(true);
          }}>
          <i className="bi bi-list"></i>
        </Button>
        <OffCanvas show={show} onClose={() => setShow(false)}>
          test
        </OffCanvas>
        <NavList />
        <div className="logo">Beauty.com</div>

        <div className="cart">
          <Badge count={1}>
            <i
              style={{ fontSize: "1.5rem", color: "var(--blue)" }}
              className="bi bi-cart-fill"></i>
          </Badge>
        </div>
      </Container>
    </S.Header>
  );
}
