// src/models/index.js

const sequelize = require("../config/database");
const Budget = require("./Budget");

module.exports = {
  sequelize,
  Budget
};