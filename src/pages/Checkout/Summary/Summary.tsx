import React from "react";
import * as S from "./Summary.styled";
import useCartSummary from "../../../hooks/useCartSummary";
import { useNavigate } from "react-router-dom";
import { roundPrice } from "../../../utils/number.utils";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";
import { useState } from "react";
import Popup from "../../../components/Popup/Popup";

const Summary = (): JSX.Element => {
  const { cart, totalPrice, shippingCost, onCheckout, loading } =
    useCartSummary();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

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

        <S.CheckoutButton
          disabled={cart.length === 0}
          onClick={() => {
            handleCheckout();
          }}
        >
          Checkout
        </S.CheckoutButton>
        <S.ContinueButton onClick={() => navigate("/products")}>
          Continue shopping
        </S.ContinueButton>
      </S.SummaryContainer>

      {showPopup && (
        <Popup show={showPopup} onClose={handlePopupClose}>
          <S.PopupContent>
            <S.TextContent>Do you want to purcharese 🤔?</S.TextContent>
            <S.BtnCheckout
              onClick={() => {
                onCheckout();
                handlePopupClose();
              }}
            >
              Yes
            </S.BtnCheckout>
            <S.BtnCheckout onClick={handlePopupClose}>No</S.BtnCheckout>
          </S.PopupContent>
        </Popup>
      )}
    </S.Summary>
  );
};

export default Summary;
