// validators/expenseValidator.js

const { body } =
require("express-validator");

exports.createExpenseValidation = [

  body("title")
    .notEmpty()
    .withMessage("Title required"),

  body("category")
    .notEmpty()
    .withMessage("Category required"),

  body("amount")
    .isNumeric()
    .withMessage("Amount required"),,

  body("expenseDate")
    .notEmpty()
    .withMessage("Expense required"),
];