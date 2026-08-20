import Header from "./Header";
import Sidebar from "./Sidebar";

import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />

      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          bgcolor: "#f4f6f8"
        }}
      >
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}