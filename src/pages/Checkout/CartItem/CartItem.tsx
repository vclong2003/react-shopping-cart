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

  // const handleRemove = () => {
  //   dispatch(removeProduct(productId));
  // };

  return (
    <S.CartItemContainer>
      <S.ProductImage src={imageUrl} alt="" />
      <S.ProductDetails>
        <h3>{productName}</h3>
        <p>{description}</p>
      </S.ProductDetails>
      <S.Actions>
        <p>Giá: ${price}</p>
        <p>Số lượng: {quantity}</p>
        <QuantityInput quantity={quantity} onSetQuantity={setQuantity} />
        {/* <RemoveButton onClick={handleRemove}>Xóa</RemoveButton> */}
      </S.Actions>
    </S.CartItemContainer>
  );
}
