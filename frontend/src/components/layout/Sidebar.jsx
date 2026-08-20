import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

import {
  Dashboard,
  Receipt,
  AccountBalanceWallet
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          top: "64px",
          height: "calc(100% - 64px)",
          backgroundColor: "#1f2937",
          color: "white"
        }
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/dashboard")}
          >
            <Dashboard sx={{ mr: 2 }} />
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/expenses")}
          >
            <Receipt sx={{ mr: 2 }} />
            <ListItemText primary="Expenses" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/budgets")}
          >
            <AccountBalanceWallet sx={{ mr: 2 }} />
            <ListItemText primary="Budgets" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
