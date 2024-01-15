import React from "react";
import * as S from "./Summary.styled";
import useCartSummary from "../../../hooks/useCartSummary";

const Summary = (): JSX.Element => {
  const { totalPrice, shippingCost } = useCartSummary();
  return (
    <S.Summary>
      <S.SummaryContainer>
        <S.SummaryTitle>Order Info</S.SummaryTitle>
        <S.SummaryItem>
          <span>Subtotal:</span>
          <span>${totalPrice}</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <span>Shipping Cost:</span>
          <span>${shippingCost}</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.TotalLabel>Total:</S.TotalLabel>
          <S.TotalAmount>${totalPrice + shippingCost}</S.TotalAmount>
        </S.SummaryItem>
      </S.SummaryContainer>
      <S.CheckoutButton>Checkout</S.CheckoutButton>
      <S.ContinueButton>Continue shopping</S.ContinueButton>
    </S.Summary>
  );
};

export default Summary;
