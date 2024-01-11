import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/products";
import cartSlice from "./slices/cart";

const store = configureStore({
  reducer: {
    [productSlice.name]: productSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
