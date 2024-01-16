import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../../interfaces";
// import { axiosInstance } from "../../lib/axios";
// import { API_ENDPOINTS } from "../../config/api";
// import { RootState } from "..";

interface ICartState {
  cart: ICartItem[];
  loading: boolean;
  error: string | null;
}

const name = "cartState";
const initialState: ICartState = {
  cart: [],
  loading: false,
  error: null,
};

// const checkout = createAsyncThunk(
//   `${name}/checkout`,
//   async (_, { getState, fulfillWithValue, rejectWithValue }) => {
//     const { cart:  } = getState() as RootState;
//     const response = await axiosInstance.post(API_ENDPOINTS.CHECKOUT);
//   },
// );

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
  },
});

export const { addCartItem, changeItemQuantity, removeItemFromCart } =
  cartState.actions;
export default cartState;
