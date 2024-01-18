import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect, useState } from "react";
import { checkout } from "../store/slices/cart";
import { calcCartSubTotal } from "../utils/cart.utils";

export default function useCartSummary() {
  const { cart, loading } = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch<AppDispatch>();

  const [totalPrice, setTotalPrice] = useState(0);
  const shippingCost = 10;

  useEffect(() => {
    setTotalPrice(calcCartSubTotal(cart));
  }, [cart]);

  const onCheckout = () => {
    dispatch(checkout());
  };

  return { cart, onCheckout, loading, totalPrice, shippingCost };
}
