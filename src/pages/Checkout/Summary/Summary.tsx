// Summary.tsx
import React, { useState } from "react";
import * as S from "./Summary.styled";
import useCartSummary from "../../../hooks/useCartSummary";
import { useNavigate } from "react-router-dom";
import { roundPrice } from "../../../utils/number.utils";
import Notification from "../../../components/Notification/Notification";

const Summary = (): JSX.Element => {
  const { cart, totalPrice, shippingCost } = useCartSummary();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const handleCheckout = () => {
    const confirmCheckout = window.confirm(
      "Do you want to proceed with the payment?",
    );

    if (confirmCheckout) {
      setShowNotification(true);
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <S.Summary>
      <S.SummaryContainer>
        <S.SummaryTitle>Order Info</S.SummaryTitle>
        <S.SummaryItem>
          <S.Subtotal>Subtotal:</S.Subtotal>
          <S.TotalPrice>${roundPrice(totalPrice)}</S.TotalPrice>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.ShippingCost>Shipping Cost:</S.ShippingCost>
          <S.CostPrice>${shippingCost}</S.CostPrice>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.TotalLabel>Total:</S.TotalLabel>
          <S.TotalAmount>
            ${roundPrice(totalPrice + shippingCost)}
          </S.TotalAmount>
        </S.SummaryItem>

        <S.CheckoutButton disabled={cart.length === 0} onClick={handleCheckout}>
          Checkout
        </S.CheckoutButton>
        <S.ContinueButton onClick={() => navigate("/products")}>
          Continue shopping
        </S.ContinueButton>
      </S.SummaryContainer>

      {showNotification && (
        <Notification
          message="Payment successful. Thank you for your purchase!"
          onClose={closeNotification}
        />
      )}
    </S.Summary>
  );
};

export default Summary;
