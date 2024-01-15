import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../../interfaces";

interface ICartSlice {
  cart: ICartItem[];
  loading: boolean;
  error: string | null;
}

const name = "cart";
const initialState: ICartSlice = {
  cart: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<ICartItem>) => {
      const newCartItem = action.payload;
      const {
        quantity: newItemQuantity,
        product: { productId: newProductId },
      } = newCartItem;

      const existingCartItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.product.productId === newProductId
      );

      // Item already exists in cart
      if (existingCartItemIndex !== -1) {
        state.cart[existingCartItemIndex].quantity += newItemQuantity;
        return;
      }

      state.cart.push(newCartItem);
    },
    changeItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const {
        product: { productId },
        quantity: newQuantity,
      } = action.payload;

      const existingCartItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.product.productId === productId
      );

      if (existingCartItemIndex === -1) return;

      state.cart[existingCartItemIndex].quantity = newQuantity;
    },
  },
});

export const { addCartItem, changeItemQuantity } = cartSlice.actions;
export default cartSlice;
