import React, { useEffect, useState } from "react";
import { ICartItem } from "../../../interfaces";
import QuantityInput from "../../../components/QuanityInput/QuantityInput";
import * as S from "./CartItem.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { changeItemQuantity } from "../../../store/slices/cart";

interface ICartItemProps {
  cartItem: ICartItem;
}

export default function CartItem({ cartItem }: ICartItemProps) {
  const { quantity: initialQuantity, product } = cartItem;
  const { imageUrl, productName, description, price } = product;
  const dispatch = useDispatch<AppDispatch>();

  const [quantity, setQuantity] = useState<number>(initialQuantity);
  useEffect(() => {
    dispatch(changeItemQuantity({ product, quantity }));
  }, [quantity, dispatch, product]);

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
