import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Container
} from "@mui/material";

import { toast } from "react-toastify";

import { loginUser } from "../api/authApi";
import { loginSuccess } from "../redux/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(form);

      dispatch(
        loginSuccess(
          response.data.data.token
        )
      );

      toast.success(
        "Login Successful"
      );

      navigate("/dashboard");

    } catch (error) {

      toast.error(
        error?.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#1976d2,#42a5f5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Container maxWidth="sm">
        <Card
          elevation={8}
          sx={{
            borderRadius: 4
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
              gutterBottom
            >
              Expense Tracker
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              mb={4}
            >
              Sign in to continue
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value
                  })
                }
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value
                  })
                }
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2
                }}
              >
                Login
              </Button>

              <Typography
                textAlign="center"
                sx={{ mt: 3 }}
              >
                Don't have an account?{" "}
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "bold"
                  }}
                >
                  Register
                </Link>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}