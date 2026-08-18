// src/routes/authRoutes.js

const express = require("express");

const router = express.Router();

const authController  = require("../controllers/authController");
const { registerValidation } = require("../validators/authValidator");
const validateMiddleware = require("../../../shared/middleware/validateMiddleware");
const { login } = require("../controllers/loginController");
const authMiddleware = require("../../../shared/middleware/authMiddleware");


router.post(
    "/register", registerValidation, validateMiddleware,
    authController.register
);
router.post(
    "/login",
    login
);

router.get(
    "/me",
    authMiddleware,
    authController.getCurrentUser
);

module.exports = router;