// src/models/index.js

const sequelize = require("../config/database");
const Expense = require("./Expense");

module.exports = {
  sequelize,
  Expense
};