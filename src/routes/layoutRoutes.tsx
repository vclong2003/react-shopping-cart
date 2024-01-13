import { IRoute } from "../interfaces";
import Products from "../pages/Products/Products";

export const layoutRoutes: IRoute[] = [
  {
    path: "/",
    component: (
      <div>
        <h1
          style={{
            height: "3000px",
            backgroundColor: "var(--gray-light)",
          }}>
          Home
        </h1>
      </div>
    ),
  },
  {
    path: "/products",
    component: <Products />,
  },
  {
    path: "/reviews",
    component: <>Review</>,
  },
];
