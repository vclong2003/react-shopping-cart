import * as S from "./Header.styled";
import Badge from "../Badge/Badge";
import OffCanvas from "../OffCanvas/OffCanvas";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [isOffcanavsVisible, setIsOffCanvasVisible] = useState<boolean>(false);

  const openOffcanvas = () => setIsOffCanvasVisible(true);
  const closeOffCanvas = () => setIsOffCanvasVisible(false);

  return (
    <S.Header>
      <S.Nav>
        <S.ResponsiveNavButton onClick={openOffcanvas}>
          <i className="bi bi-list"></i>
        </S.ResponsiveNavButton>
        <OffCanvas show={isOffcanavsVisible} onClose={closeOffCanvas}>
          <S.VerticalNavList />
        </OffCanvas>
        <S.NavList />
        <S.Logo href="/">Beauty.com</S.Logo>
        <S.CartButton to="/checkout">
          <Badge count={1}>
            <S.CartIcon>
              <i className="bi bi-cart-fill" />
            </S.CartIcon>
          </Badge>
        </S.CartButton>
      </S.Nav>
    </S.Header>
  );
}
