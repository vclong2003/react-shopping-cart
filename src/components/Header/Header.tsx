import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

import S from "./Header.styled";
import Badge from "../Badge/Badge";

export default function Header(): JSX.Element {
  return (
    <S.Header>
      <Container className="nav">
        <div className="linksContainer">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
        </div>
        <div className="logo">Beauty.hd</div>
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
