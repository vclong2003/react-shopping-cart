import { Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import Products from "../pages/Products/Product";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div>
              <h1
                style={{
                  height: "3000px",
                  backgroundColor: "var(--gray-light)",
                }}
              >
                Home
              </h1>
            </div>
          }
        />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
