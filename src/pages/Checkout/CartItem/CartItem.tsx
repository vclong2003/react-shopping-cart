import React, { useState } from "react";
import { ICartItem } from "../../../interfaces";
import QuantityInput from "../../../components/QuanityInput/QuantityInput";
import * as S from "./CartItem.styled";

interface ICartItemProps {
  cartItem: ICartItem;
}

export default function CartItem({ cartItem }: ICartItemProps) {

  const [quantity, setQuantity] = useState<number>(1);
  const { imageUrl, productName, description, price } = cartItem.product;

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
