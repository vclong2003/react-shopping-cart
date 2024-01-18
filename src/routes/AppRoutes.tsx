import React from "react";

import Layout from "../components/Layout/Layout";
import { Route, Routes } from "react-router";

import { layoutRoutes } from "./layoutRoutes";
import { standaloneRoutes } from "./standaloneRoutes";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {layoutRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>

      {standaloneRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
}
