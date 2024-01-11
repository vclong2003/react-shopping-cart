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
  reducers: {},
});

export default cartSlice;
