const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../../../shared/middleware/authMiddleware");

const controller =
require("../controllers/budgetController");

router.post(
 "/",
 authMiddleware,
 controller.createBudget
);

router.get(
 "/",
 authMiddleware,
 controller.getBudgets
);

router.get(
 "/alerts",
 authMiddleware,
 controller.getAlerts
);

router.get(
 "/summary/dashboard",
 authMiddleware,
 controller.getDashboardSummary
);

router.get(
 "/:id",
 authMiddleware,
 controller.getBudgetById
);

router.put(
 "/:id",
 authMiddleware,
 controller.updateBudget
);

router.delete(
 "/:id",
 authMiddleware,
 controller.deleteBudget
);



module.exports = router;