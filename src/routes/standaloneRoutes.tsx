import { IRoute } from "../interfaces";

export const standaloneRoutes: IRoute[] = [
  {
    name: "404",
    path: "*",
    component: <h1>404</h1>,
  },
];
