import { Outlet } from "react-router";
import Header from "../Header";
import { Container } from "@mui/system";

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
