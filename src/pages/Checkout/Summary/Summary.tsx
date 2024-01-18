import React from "react";
import * as S from "./Summary.styled";

import useCartSummary from "../../../hooks/useCartSummary";
import ConfirmPopup from "../ConfirmPopup/ConfirmPopup";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";

import { roundPrice } from "../../../utils/number.utils";

const Summary = (): JSX.Element => {
  const {
    cart,
    totalPrice,
    shippingCost,
    loading,
    onContinueShopping,
    isPopupVisible,
    openPopup,
    checkout,
    cancelCheckout,
  } = useCartSummary();

  return (
    <S.Summary>
      {loading && <LoadingOverlay />}
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
        <S.CheckoutButton disabled={cart.length === 0} onClick={openPopup}>
          Checkout
        </S.CheckoutButton>
        <S.ContinueButton onClick={onContinueShopping}>
          Continue shopping
        </S.ContinueButton>
      </S.SummaryContainer>
      <ConfirmPopup
        show={isPopupVisible}
        onCheckout={checkout}
        onCancel={cancelCheckout}
      />
    </S.Summary>
  );
};

export default Summary;
