import { AppBar, Button, Stack, Tab, Tabs } from "@mui/material";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  return (
    <AppBar color={"transparent"} position="static">
      <Stack direction={"row"} spacing={2}>
        <Tabs>
          <Tab label="Home" value="/" to="/" component={Link} />
          <Tab
            label="Products"
            value="/products"
            to="/products"
            component={Link}
          />
          <Tab
            label="Reviews"
            value="/reviews"
            to="/reviews"
            component={Link}
          />
        </Tabs>
      </Stack>
    </AppBar>
  );
}
