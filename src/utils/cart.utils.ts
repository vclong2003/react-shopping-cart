import { ENotificationType } from "../enum";
import { INotification } from "../interfaces";
import { ICartApiData, ICartItem } from "../interfaces/cart.interfaces";

/**
 * Get the notification object for cart checkout success
 * @returns {INotification}
 */
const cartCheckoutSuccessNoti = (): INotification => ({
  message: "Checkout successful! 😀",
  type: ENotificationType.Success,
});

/**
 * Get the notification object for cart checkout error
 * @returns {INotification}
 */
const cartCheckoutErrorNoti = (): INotification => ({
  message: "Some thing went wrong! 😞",
  type: ENotificationType.Error,
});

/**
 * Get the cart data for API request
 * @param {ICartItem[]} cart
 * @returns {ICartApiData}
 */
const getCartApiData = (cart: ICartItem[]): ICartApiData => {
  const cartApiData: ICartApiData = {
    paySuccess: true,
    productsInOrder: cart.map((cartItem) => ({
      productId: cartItem.product.productId,
      quantity: cartItem.quantity,
    })),
  };

  return cartApiData;
};

/**
 * Calculate the subtotal of the cart
 * @param {ICartItem[]} cart
 * @returns {number}
 */
const calcCartSubTotal = (cart: ICartItem[]): number => {
  const subTotal = cart.reduce(
    (prev, curr) => prev + curr.product.price * curr.quantity,
    0,
  );

  return subTotal;
};

export {
  getCartApiData,
  cartCheckoutSuccessNoti,
  cartCheckoutErrorNoti,
  calcCartSubTotal,
};
