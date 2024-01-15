import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useCallback, useEffect, useState } from "react";

export default function useCartSummary() {
  const { cart } = useSelector((state: RootState) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const shippingCost = 10;

  const calcTotal = useCallback((): number => {
    const totalPrice = cart.reduce(
      (prev, curr) => prev + curr.product.price * curr.quantity,
      0
    );
    return totalPrice;
  }, [cart]);

  useEffect(() => setTotalPrice(calcTotal()), [calcTotal]);

  return { cart, totalPrice, shippingCost };
}
