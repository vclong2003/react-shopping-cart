import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INotification } from "../../interfaces";

interface INotificationState {
  notification: INotification | null;
}

const name = "notification";
const initialState: INotificationState = {
  notification: null,
};

const notification = createSlice({
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

export const { setNotification, clearNotification } = notification.actions;
export default notification;
