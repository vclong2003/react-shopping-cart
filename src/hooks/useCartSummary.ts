import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useCallback, useEffect, useState } from "react";
import { checkout } from "../store/slices/cart";
import { setNotification } from "../store/slices/notification";
import { ENotificationType } from "../enum";

export default function useCartSummary() {
  const { cart, loading, error } = useSelector(
    (state: RootState) => state.cartState,
  );
  const dispatch = useDispatch<AppDispatch>();

  const [totalPrice, setTotalPrice] = useState(0);
  const shippingCost = 10;

  useEffect(() => {
    if (!error) return;
    dispatch(
      setNotification({ message: error, type: ENotificationType.Error }),
    );
  }, [error]);

  const calcTotal = useCallback((): number => {
    const totalPrice = cart.reduce(
      (prev, curr) => prev + curr.product.price * curr.quantity,
      0,
    );
    return totalPrice;
  }, [cart]);

  const onCheckout = () => {
    dispatch(checkout());
  };

  useEffect(() => setTotalPrice(calcTotal()), [calcTotal]);

  return { cart, onCheckout, loading, totalPrice, shippingCost };
}
