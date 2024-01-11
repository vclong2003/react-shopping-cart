import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = ["Home", "About", "Contact"];

export default function ResponsiveMenu(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton onClick={handleOpenNavMenu}>
        <MenuIcon sx={{ fontSize: "var(--fs-2xl)", color: "var(--white)" }} />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}>
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Button key={page} sx={{ color: "black" }}>
              {page}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
