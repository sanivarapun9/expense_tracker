// repositories/budgetRepository.js

const Budget = require("../models/Budget");

const createBudget = async (data) => {
  return Budget.create(data);
};

const getBudgetById = async (id) => {
  return Budget.findByPk(id);
};

const getBudgets = async (userId) => {
  return Budget.findAll({
    where: {
      userId
    }
  });
};

const updateBudget = async (id, data) => {
  return Budget.update(
    data,
    {
      where: { id }
    }
  );
};

const deleteBudget = async (id) => {
  return Budget.destroy({
    where: { id }
  });
};

module.exports = {
  createBudget,
  getBudgetById,
  getBudgets,
  updateBudget,
  deleteBudget
};