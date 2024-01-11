import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";
import { axiosInstance } from "../../lib/axios";
import API_ENDPOINTS from "../../config/api";

export interface IProductSlice {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const name = "products";
const initialState: IProductSlice = {
  products: [],
  loading: false,
  error: null,
};

const fetchAllProducts = createAsyncThunk(
  `${name}/fetchAllProducts`,
  async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.PRODUCTS);
    return response.data;
  }
);

const productSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export default productSlice;
export { fetchAllProducts };
