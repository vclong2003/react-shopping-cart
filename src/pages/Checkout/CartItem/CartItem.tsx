import React, { useState } from "react";
import { ICartItem } from "../../../interfaces";
import QuantityInput from "../../../components/QuanityInput/QuantityInput";
import * as S from "./CartItem.styled";

interface ICartItemProps {
  cartItem: ICartItem;
}

export default function CartItem({ cartItem }: ICartItemProps) {
  const { quantity: initialQuantity, product } = cartItem;
  const { imageUrl, productName, description, price } = product;

  const [quantity, setQuantity] = useState<number>(initialQuantity);

  return (
    <S.CartItemContainer>
      <S.Left>
        <S.ProductImage src={imageUrl} alt="" />
      </S.Left>
      <S.Right>
        <S.ProductDetails>
          <S.ProductName>{productName}</S.ProductName>
          <S.DetailDescription>{description}</S.DetailDescription>
        </S.ProductDetails>
        <S.Actions>
          <QuantityInput quantity={quantity} onSetQuantity={setQuantity} />
          <S.Prices> ${price * quantity}</S.Prices>
        </S.Actions>
      </S.Right>
    </S.CartItemContainer>
  );
}
