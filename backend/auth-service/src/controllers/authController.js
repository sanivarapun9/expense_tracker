// src/controllers/authController.js

const authService =
require("../services/authService");

const register = async (
  req,
  res,
  next
) => {

  try {

    const user =
    await authService.register(
      req.body
    );

    return res.status(201).json({
      success: true,
      data: user
    });

  } catch (error) {
      next(error);
  }
};

module.exports = {
  register
};