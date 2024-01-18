import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INotification, INotificationState } from "../../interfaces";

const name = "notificationState";
const initialState: INotificationState = {
  notification: null,
};

const notificationState = createSlice({
  name,
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<INotification>) => {
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationState.actions;
export default notificationState;
