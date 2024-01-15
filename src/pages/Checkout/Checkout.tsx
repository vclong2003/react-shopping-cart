import React from "react";
import CartList from "./CartList/CartList";
import Summary from "./Summary/Summary";
import * as S from "./Checkout.styled";

const Checkout: React.FC = () => {
  return (
    <S.Checkout>
      <S.CheckoutContainer>
        <S.CheckoutTitle>My shopping cart</S.CheckoutTitle>
        <S.CheckoutContent>
          <CartList />
          <Summary />
        </S.CheckoutContent>
      </S.CheckoutContainer>
    </S.Checkout>
  );
};

export default Checkout;
