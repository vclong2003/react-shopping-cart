import { Box, Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = ["Home", "About", "Contact"];

export default function Menu(): JSX.Element {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Link key={page} href="home" sx={{ color: "white" }}>
          {page}
        </Link>
      ))}
    </Box>
  );
}
