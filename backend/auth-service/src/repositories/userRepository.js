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

const getUserById = async (id) => {
  return User.findByPk(id, {
    attributes: {
      exclude: ["password"]
    }
  });
};

module.exports = {
  createUser,
  findByEmail,
  getUserById
};
