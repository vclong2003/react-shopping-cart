import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";
import { axiosInstance } from "../../lib/axios";
import { API_ENDPOINTS } from "../../config/api";

export interface IProductSlice {
  products: IProduct[];
  selectedProduct: IProduct | null;
  loading: boolean;
  error: string | null;
}

const name = "products";
const initialState: IProductSlice = {
  products: [],
  selectedProduct: null,
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
  reducers: {
    selectProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload;
    },
  },
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

export const { selectProduct } = productSlice.actions;
export default productSlice;
export { fetchAllProducts };
