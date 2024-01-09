import { BrowserRouter } from "react-router-dom";

interface IAppProviderProps {
  children: JSX.Element;
}

export default function AppProvider({
  children,
}: IAppProviderProps): JSX.Element {
  return <BrowserRouter>{children}</BrowserRouter>;
}
