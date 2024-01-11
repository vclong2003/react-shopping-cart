import { AppBar, Button, Stack, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button>Home</Button>
          <Button>Products</Button>
          <Button>Reviews</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
