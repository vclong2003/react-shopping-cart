import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cart";
import notification from "./slices/notification";
import product from "./slices/product";

const store = configureStore({
  reducer: {
    [product.name]: product.reducer,
    [cart.name]: cart.reducer,
    [notification.name]: notification.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
