// validators/budgetValidator.js

const {
 body
} = require("express-validator");

exports.createBudgetValidation = [

 body("category")
 .notEmpty()
 .withMessage("Category required"),

 body("monthlyLimit")
 .isNumeric()
 .withMessage("Monthly Limit should be number")

];