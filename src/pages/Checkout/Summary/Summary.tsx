import React from "react";
import * as S from "./Summary.styled";
import useCartSummary from "../../../hooks/useCartSummary";

const Summary = (): JSX.Element => {
  const { cart, totalPrice, shippingCost } = useCartSummary();
  return (
    <S.Summary>
      <S.SummaryContainer>
        <S.SummaryTitle>Order Info</S.SummaryTitle>
        <S.SummaryItem>
          <S.Subtotal>Subtotal:</S.Subtotal>
          <S.TotalPrice>${totalPrice}</S.TotalPrice>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.ShippingCost>Shipping Cost:</S.ShippingCost>
          <S.CostPrice>${shippingCost}</S.CostPrice>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.TotalLabel>Total:</S.TotalLabel>
          <S.TotalAmount>${totalPrice + shippingCost}</S.TotalAmount>
        </S.SummaryItem>
      </S.SummaryContainer>
      <S.CheckoutButton
        disabled={cart.length === 0}
        onClick={() => console.log("ftdf")}
      >
        Checkout
      </S.CheckoutButton>
      <S.ContinueButton onClick={() => (window.location.href = "/products")}>
        Continue shopping
      </S.ContinueButton>
    </S.Summary>
  );
};

export default Summary;
