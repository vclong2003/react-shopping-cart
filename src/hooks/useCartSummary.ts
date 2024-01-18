import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store";

import { checkout as checkoutAction } from "../store/slices/cart";
import { calcCartSubTotal } from "../utils/cart.utils";
import { useNavigate } from "react-router-dom";

export default function useCartSummary() {
  const { cart, loading } = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const shippingCost = 10;

  useEffect(() => {
    setTotalPrice(calcCartSubTotal(cart));
  }, [cart]);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const checkout = () => {
    dispatch(checkoutAction());
    setIsPopupVisible(false);
  };

  const cancelCheckout = () => {
    setIsPopupVisible(false);
  };

  const onContinueShopping = () => {
    navigate("/products");
  };

  return {
    cart,
    onContinueShopping,
    loading,
    totalPrice,
    shippingCost,
    isPopupVisible,
    openPopup,
    checkout,
    cancelCheckout,
  };
}
