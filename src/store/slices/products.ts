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
  reducers: {},
});

export default productSlice;
