import React from "react";
import * as S from "./Checkout.styled";

import CartList from "./CartList/CartList";
import Summary from "./Summary/Summary";

const Checkout = (): JSX.Element => {
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
