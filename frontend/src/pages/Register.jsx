import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography
} from "@mui/material";

import { toast } from "react-toastify";

import { registerUser } from "../api/authApi";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);

      toast.success(
        "Registration Successful"
      );

      navigate("/");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Registration Failed"
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
              textAlign="center"
              gutterBottom
            >
              Create Account
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              mb={4}
            >
              Register to manage your expenses
            </Typography>

            <form onSubmit={submit}>
              <TextField
                fullWidth
                label="Full Name"
                margin="normal"
                value={form.fullName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    fullName: e.target.value
                  })
                }
              />

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
                variant="contained"
                type="submit"
                size="large"
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2
                }}
              >
                Register
              </Button>

              <Typography
                textAlign="center"
                sx={{ mt: 3 }}
              >
                Already have an account?{" "}
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#1976d2",
                    fontWeight: "bold"
                  }}
                >
                  Login
                </Link>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}