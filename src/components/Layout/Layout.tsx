import { Outlet } from "react-router";
import Header from "../Header/Header";
import Container from "../Container/Container";

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
