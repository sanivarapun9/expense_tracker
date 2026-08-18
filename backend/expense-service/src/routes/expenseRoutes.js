// routes/expenseRoutes.js

const express =
require("express");

const router =
express.Router();

const expenseController =
require("../controllers/expenseController");
const authMiddleware = require("../../../shared/middleware/authMiddleware");


router.post(
  "/",
  authMiddleware,
  expenseController.createExpense
);

router.get(
  "/",
  authMiddleware,
  expenseController.getExpenses
);


router.get(
 "/summary",
 authMiddleware,
 expenseController.totalSummary
);

router.get(
 "/category-summary",
 authMiddleware,
 expenseController.categorySummary
);

router.get(
  "/:id",
  authMiddleware,
  expenseController.getExpenseById
);

router.put(
  "/:id",
  authMiddleware,
  expenseController.updateExpense
);

router.delete(
  "/:id",
  authMiddleware,
  expenseController.deleteExpense
);


module.exports = router;