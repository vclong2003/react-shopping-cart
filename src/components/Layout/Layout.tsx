import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
