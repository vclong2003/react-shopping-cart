import { ENotificationType } from "../enum";
import { ICartApiData, ICartItem, INotification } from "../interfaces";

const cartCheckoutSuccessNoti = (): INotification => ({
  message: "Checkout successful! 😀",
  type: ENotificationType.Success,
});

const cartCheckoutErrorNoti = (): INotification => ({
  message: "Some thing went wrong! 😞",
  type: ENotificationType.Error,
});

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
