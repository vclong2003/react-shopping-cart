import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

import S from "./Header.styled";
import Badge from "../Badge/Badge";
import OffCanvas from "../OffCanvas/OffCanvas";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <S.Header>
      <Container className="nav">
        <OffCanvas show={show} onClose={() => setShow(false)}>
          test
        </OffCanvas>
        <div className="linksContainer">
          <NavLink className="navItem" to="/">
            Home
          </NavLink>
          <NavLink className="navItem" to="/products">
            Products
          </NavLink>
          <NavLink className="navItem" to="/reviews">
            Reviews
          </NavLink>
        </div>
        <div
          className="logo"
          onClick={() => {
            setShow(true);
          }}>
          Beauty.hd
        </div>

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
