import { ChangeEvent, useEffect } from "react";
import * as S from "./QuantityInput.styled";

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
    <S.QuantityBtn>
      <S.MinusBtn onClick={decreaseQuantity}>
        <i className="bi bi-dash"></i>
      </S.MinusBtn>
      <S.QuantityInput
        type="number"
        value={quantity}
        onChange={handleQuantityInput}
      />
      <S.PlusBtn onClick={increaseQuantity}>
        <i className="bi bi-plus"></i>
      </S.PlusBtn>
    </S.QuantityBtn>
  );
}