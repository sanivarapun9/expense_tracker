const express =
require("express");

const cors =
require("cors");

const helmet =
require("helmet");

const expenseRoutes =
require("./routes/budgetRoutes");
const errorMiddleware = require("../../shared/middleware/errorMiddleware");


const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(
  "/api/expenses",
  expenseRoutes
);

app.use(errorMiddleware);

module.exports = app;