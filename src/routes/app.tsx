import { Route, Routes } from "react-router";
import Layout from "../components/Layout";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home</h1>} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
