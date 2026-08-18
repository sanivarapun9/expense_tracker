// services/expenseService.js

const repository = require("../repositories/expenseRepository");

const createExpense = async (data) => {
  return repository.createExpense(data);
};

const getExpenseById = async (id) => {

  const expense =
    await repository.findById(id);

  if (!expense) {
    throw new Error("Expense not found");
  }

  return expense;
};

const updateExpense = async (id, data) => {

  await getExpenseById(id);

  await repository.updateExpense(id, data);

  return getExpenseById(id);
};

const deleteExpense = async (id) => {

  await getExpenseById(id);

  return repository.deleteExpense(id);
};

const getExpenses = async (
  userId,
  category,
  page,
  size
) => {

  const limit = size || 10;

  const offset =
    (page - 1) * limit;

  const whereClause = {
    userId
  };

  if (category) {
    whereClause.category = category;
  }

  return repository.getExpenses(
    whereClause,
    limit,
    offset
  );
};

const getCategorySummary = async (userId) => {

  return repository.getCategorySummary(
    userId
  );

};

const getTotalExpenses = async (userId) => {

  return repository.getTotalExpenses(
    userId
  );

};

module.exports = {
  createExpense,
  getExpenseById,
  updateExpense,
  deleteExpense,
  getExpenses,
  getCategorySummary,
  getTotalExpenses
};