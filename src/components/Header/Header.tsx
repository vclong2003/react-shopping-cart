import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

export default function Header(): JSX.Element {
  return (
    <div className="navbar">
      <Container>
        <NavLink to="/">Home</NavLink>
      </Container>
    </div>
  );
}
