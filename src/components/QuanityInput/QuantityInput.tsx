import React from "react";
import * as S from "./QuantityInput.styled";

import { ChangeEvent, useEffect } from "react";

interface IQuantityInput {
  quantity: number;
  onSetQuantity: (quantity: number) => void;
}

export default function QuantityInput({
  quantity,
  onSetQuantity,
}: IQuantityInput) {
  const increaseQuantity = () => {
    onSetQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    onSetQuantity(quantity - 1);
  };

  const handleQuantityInput = (e: ChangeEvent<HTMLInputElement>) => {
    onSetQuantity(Number(e.target.value));
  };

  useEffect(() => {
    if (quantity < 1) {
      onSetQuantity(1);
    }
  }, [quantity, onSetQuantity]);

  return (
    <S.QuantityInput>
      <S.ChangeValueBtn disabled={quantity === 1} onClick={decreaseQuantity}>
        <i className="bi bi-dash"></i>
      </S.ChangeValueBtn>
      <S.Input type="number" value={quantity} onChange={handleQuantityInput} />
      <S.ChangeValueBtn onClick={increaseQuantity}>
        <i className="bi bi-plus"></i>
      </S.ChangeValueBtn>
    </S.QuantityInput>
  );
}
