const express =
require("express");

const cors =
require("cors");

const helmet =
require("helmet");

const budgetRoutes =
require("./routes/budgetRoutes");

const errorMiddleware =
require("../../shared/middleware/errorMiddleware");

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.get(
 "/health",
 (req,res)=>{
  res.send(
   "Budget Service UP"
  );
 }
);

app.use(
 "/api/budgets",
 budgetRoutes
);

app.use(
 errorMiddleware
);

module.exports = app;