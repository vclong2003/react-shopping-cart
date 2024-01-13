import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import "../assets/css/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface IAppProviderProps {
  children: JSX.Element;
}

export default function AppProvider({
  children,
}: IAppProviderProps): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
