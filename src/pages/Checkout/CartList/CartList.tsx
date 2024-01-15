import React from "react";
import CartItem from "../CartItem/CartItem";
import * as S from "./CartList.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function CartList() {
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <S.CartListContainer>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <CartItem key={cartItem.product.productId} cartItem={cartItem} />
        ))
      ) : (
        <S.EmptyCartMessage>Giỏ hàng của bạn đang trống.</S.EmptyCartMessage>
      )}
    </S.CartListContainer>
  );
}
