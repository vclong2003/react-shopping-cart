import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../../interfaces";

interface ICartSlice {
  cart: ICartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ICartSlice = {
  cart: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCart: (state) => {
      state.loading = true;
    },
    getCartSuccess: (state, { payload }) => {
      state.cart = payload;
      state.loading = false;
      state.error = null;
    },
    getCartFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(
        (item) => item.product.productId !== payload
      );
    },
    updateQuantity: (state, { payload }) => {
      const { productId, quantity } = payload;
      const index = state.cart.findIndex(
        (item) => item.product.productId === productId
      );
      if (index !== -1) {
        state.cart[index].quantity = quantity;
      }
    },
  },
});

export default cartSlice;
