// src/routes/authRoutes.js

const express = require("express");

const router = express.Router();

const { register } = require("../controllers/authController");
const { registerValidation } = require("../validators/authValidator");
const validateMiddleware = require("../../../shared/middleware/validateMiddleware");
const { login } = require("../controllers/loginController");


router.post(
 "/register",registerValidation,validateMiddleware,
 register
);
router.post(
 "/login",
 login
);

module.exports = router;