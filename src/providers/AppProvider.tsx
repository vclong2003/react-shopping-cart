import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import "../assets/css/global.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface IAppProviderProps {
  children: JSX.Element;
}

const theme = createTheme();

export default function AppProvider({
  children,
}: IAppProviderProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
