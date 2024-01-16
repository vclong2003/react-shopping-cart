import { configureStore } from "@reduxjs/toolkit";
import productState from "./slices/product";
import cartState from "./slices/cart";
import notificationState from "./slices/notification";

const store = configureStore({
  reducer: {
    [productState.name]: productState.reducer,
    [cartState.name]: cartState.reducer,
    [notificationState.name]: notificationState.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
