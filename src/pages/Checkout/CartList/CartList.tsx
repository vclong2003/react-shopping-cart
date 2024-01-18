import React from "react";
import * as S from "./CartList.styled";

import CartItem from "../CartItem/CartItem";

import { RootState } from "../../../store";
import { useSelector } from "react-redux";

export default function CartList() {
  const { cart } = useSelector((state: RootState) => state.cartState);

  return (
    <S.CartListContainer>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <CartItem key={cartItem.product.productId} cartItem={cartItem} />
        ))
      ) : (
        <S.EmptyCartMessage>You have no products in cart.</S.EmptyCartMessage>
      )}
    </S.CartListContainer>
  );
}
