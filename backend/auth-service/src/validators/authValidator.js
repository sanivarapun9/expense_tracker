// src/validators/authValidator.js

const {
 body
} = require("express-validator");

const registerValidation = [

 body("fullName")
 .notEmpty()
 .withMessage("Full name required"),

 body("email")
 .isEmail()
 .withMessage("Invalid email"),

 body("password")
 .isLength({ min: 8 })
 .withMessage(
  "Password should be minimum 8 chars"
 )

];

module.exports = {
 registerValidation
};