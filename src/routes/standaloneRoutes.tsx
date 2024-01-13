import { IRoute } from "../interfaces";

export const standaloneRoutes: IRoute[] = [
  {
    path: "*",
    component: <h1>404</h1>,
  },
];
