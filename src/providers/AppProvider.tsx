import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import "../assets/css/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Notification from "../components/Notification/Notification";

interface IAppProviderProps {
  children: JSX.Element;
}

export default function AppProvider({
  children,
}: IAppProviderProps): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Notification />
        {children}
      </Provider>
    </BrowserRouter>
  );
}
