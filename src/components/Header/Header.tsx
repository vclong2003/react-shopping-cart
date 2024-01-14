import * as S from "./Header.styled";
import Badge from "../Badge/Badge";
import OffCanvas from "../OffCanvas/OffCanvas";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [isOffcanavsVisible, setIsOffCanvasVisible] = useState<boolean>(false);

  const handleOpenNavList = () => setIsOffCanvasVisible(true);
  const handleCloseNavList = () => setIsOffCanvasVisible(false);

  return (
    <S.Header>
      <S.Nav>
        <S.ResponsiveNavButton onClick={handleOpenNavList}>
          <i className="bi bi-list"></i>
        </S.ResponsiveNavButton>
        <OffCanvas show={isOffcanavsVisible} onClose={handleCloseNavList}>
          <S.VerticalNavList />
        </OffCanvas>
        <S.NavList />
        <S.Logo>Beauty.com</S.Logo>

        <S.CartButton>
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
