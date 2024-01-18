import React, { useEffect } from "react";

import "../assets/css/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Notification from "../components/Notification/Notification";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import { APP_TITLE } from "../config/appTitle";

interface IAppProviderProps {
  children: JSX.Element;
}

export default function AppProvider({
  children,
}: IAppProviderProps): JSX.Element {
  useEffect(() => {
    document.title = APP_TITLE;
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Notification />
        {children}
      </Provider>
    </BrowserRouter>
  );
}
