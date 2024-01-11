import { AppBar, Container, Grid, Toolbar } from "@mui/material";

import Logo from "../Logo";
import ResponsiveMenu from "./ResponsiveMenu";
import Menu from "./Menu";

export default function Header(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={4}>
            <ResponsiveMenu />
            <Menu />
          </Grid>
          <Grid item xs={4}>
            <Logo />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
