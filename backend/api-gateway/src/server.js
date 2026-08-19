require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const {
  createProxyMiddleware
} = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(morgan("dev"));

// app.use(
//   "/api/auth",
//   createProxyMiddleware({
//     target: "http://localhost:5001",
//     changeOrigin: true
//   })
// );
app.use((req, res, next) => {
  console.log("AUTH URL:", req.originalUrl);
  next();
});
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: "http://localhost:5001",
    changeOrigin: true,
    pathRewrite: {
      "^/api/auth": "/api/auth"
    },
    logLevel: "debug"
  })
);

app.use(
  "/api/expenses",
  createProxyMiddleware({
    target: "http://localhost:5002",
    changeOrigin: true
  })
);

app.use(
  "/api/budgets",
  createProxyMiddleware({
    target: "http://localhost:5003",
    changeOrigin: true
  })
);

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.originalUrl}`
  );
  next();
});

app.get("/health", (req, res) => {
  res.json({
    service: "API Gateway",
    status: "UP"
  });
});

app.listen(5000, () => {
  console.log("API Gateway Running On Port 5000");
});