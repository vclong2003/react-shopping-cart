import React from "react";
import * as S from "./Summary.styled";
import useCartSummary from "../../../hooks/useCartSummary";
import { useNavigate } from "react-router-dom";
import { roundPrice } from "../../../utils/number.utils";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";
import { setNotification } from "../../../store/slices/notification";
import { ENotificationType } from "../../../enum";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";

const Summary = (): JSX.Element => {
  const { cart, totalPrice, shippingCost, onCheckout, loading } =
    useCartSummary();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const notification = () => {
    dispatch(
      setNotification({
        message: " 👏 Thank you for your purchased!!",
        type: ENotificationType.Success,
      }),
    );
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
            onCheckout();
            notification();
          }}
        >
          Checkout
        </S.CheckoutButton>
        <S.ContinueButton onClick={() => navigate("/products")}>
          Continue shopping
        </S.ContinueButton>
      </S.SummaryContainer>
    </S.Summary>
  );
};

export default Summary;
