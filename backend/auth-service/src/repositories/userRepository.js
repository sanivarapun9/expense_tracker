// src/repositories/userRepository.js

const User = require("../models/User");

const createUser = async (userData) => {
  return User.create(userData);
};

const findByEmail = async (email) => {
  return User.findOne({
    where: {
      email
    }
  });
};

module.exports = {
  createUser,
  findByEmail
};