import {
  IProduct,
  IProductState,
  TProductsApiResponeData,
} from "../../interfaces/product.interfaces";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setNotification } from "./notification";

import { axiosInstance } from "../../lib/axios";
import { API_ENDPOINTS } from "../../config/api";
import { productFetchErrorNoti } from "../../utils/product.utils";

const name = "productState";
const initialState: IProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
};

const fetchAllProducts = createAsyncThunk(
  `${name}/fetchAllProducts`,
  async (_, { dispatch, rejectWithValue }) => {
    let response;
    try {
      response = await axiosInstance.get(API_ENDPOINTS.PRODUCTS);
    } catch (error) {
      console.log(error);
      dispatch(setNotification(productFetchErrorNoti()));
      return rejectWithValue(error);
    }
    return response.data as TProductsApiResponeData;
  },
);

const productState = createSlice({
  name,
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<IProduct | null>) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      if (state.products.length === 0) state.loading = true; // run only on initial load
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { selectProduct } = productState.actions;
export { fetchAllProducts };
export default productState;
