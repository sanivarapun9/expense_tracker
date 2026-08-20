import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) =>
          theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Expense Tracker
        </Typography>

        <Button color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}