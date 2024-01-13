import { IRoute } from "../interfaces";
import Products from "../pages/Products/Products";

export const layoutRoutes: IRoute[] = [
  {
    name: "Home",
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
    name: "Products",
    path: "/products",
    component: <Products />,
  },
  {
    name: "Reviews",
    path: "/reviews",
    component: <>Review</>,
  },
];
