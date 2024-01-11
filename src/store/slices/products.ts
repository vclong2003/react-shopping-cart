import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";

interface IProductSlice {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: IProductSlice = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.error = null;
    },
    getProductsFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default productSlice;
