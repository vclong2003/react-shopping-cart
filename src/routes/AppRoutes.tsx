import { Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import Products from "../pages/Products";
import Checkout from "../pages/Checkout/Checkout";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="products" element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
