import {
  ICartApiResponeData,
  ICartItem,
  ICartState,
} from "../../interfaces/cart.interfaces";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setNotification } from "./notification";

import { axiosInstance } from "../../lib/axios";
import { API_ENDPOINTS } from "../../config/api";
import {
  cartCheckoutErrorNoti,
  cartCheckoutSuccessNoti,
  getCartApiData,
} from "../../utils/cart.utils";

const name = "cartState";
const initialState: ICartState = {
  cart: [],
  loading: false,
};

const checkout = createAsyncThunk(
  `${name}/checkout`,
  async (cart: ICartItem[], { dispatch }) => {
    const cartApiData = getCartApiData(cart);

    let response;

    try {
      response = await axiosInstance.post(API_ENDPOINTS.CHECKOUT, cartApiData);
    } catch (error) {
      console.log(error);
      return dispatch(setNotification(cartCheckoutErrorNoti()));
    }

    const { success } = response.data as ICartApiResponeData;

    if (success) {
      dispatch(clearCart());
      return dispatch(setNotification(cartCheckoutSuccessNoti()));
    }

    dispatch(setNotification(cartCheckoutErrorNoti()));
  },
);

const cartState = createSlice({
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
        (cartItem) => cartItem.product.productId === newProductId,
      );

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
        (cartItem) => cartItem.product.productId === productId,
      );

      if (existingCartItemIndex === -1) return;

      state.cart[existingCartItemIndex].quantity = newQuantity;
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (cart) => cart.product.productId !== action.payload,
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkout.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(checkout.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  addCartItem,
  changeItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartState.actions;
export { checkout };
export default cartState;
