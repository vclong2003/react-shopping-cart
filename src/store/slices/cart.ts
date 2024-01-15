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
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice;
