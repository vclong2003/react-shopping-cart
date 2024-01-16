import React from "react";
import CartItem from "../CartItem/CartItem";
import * as S from "./CartList.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function CartList() {
  const { cart } = useSelector((state: RootState) => state.cartState);

  return (
    <S.CartListContainer>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <CartItem key={cartItem.product.productId} cartItem={cartItem} />
        ))
      ) : (
        <S.EmptyCartMessage>You have no prducts in cart.</S.EmptyCartMessage>
      )}
    </S.CartListContainer>
  );
}
