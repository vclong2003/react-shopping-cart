import { Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import Products from "../pages/Products";
import Container from "../components/Container/Container";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Container>
              <h1 style={{ height: "3000px", backgroundColor: "red" }}>Home</h1>
            </Container>
          }
        />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
