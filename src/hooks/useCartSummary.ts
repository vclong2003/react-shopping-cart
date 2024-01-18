import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store";

import { SHIPPING_COST } from "../config/feeRelated";
import { checkout as checkoutAction } from "../store/slices/cart";
import { calcCartSubTotal } from "../utils/cart.utils";
import { useNavigate } from "react-router-dom";
import { ICartItem } from "../interfaces/cart.interfaces";

export default function useCartSummary(cart: ICartItem[]) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const shippingCost = SHIPPING_COST;

  useEffect(() => {
    setTotalPrice(calcCartSubTotal(cart));
  }, [cart]);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const checkout = () => {
    dispatch(checkoutAction(cart));
    setIsPopupVisible(false);
  };

  const cancelCheckout = () => {
    setIsPopupVisible(false);
  };

  const onContinueShopping = () => {
    navigate("/products");
  };

  return {
    onContinueShopping,
    totalPrice,
    shippingCost,
    isPopupVisible,
    openPopup,
    checkout,
    cancelCheckout,
  };
}
