// services/budgetService.js

const repository =
require("../repositories/budgetRepository");

const createBudget = async (data) => {

  return repository.createBudget(data);

};

const getBudgetById = async (id) => {

  const budget =
    await repository.getBudgetById(id);

  if (!budget) {
    throw new Error("Budget not found");
  }

  return budget;
};

const getBudgets = async (userId) => {

  return repository.getBudgets(userId);

};

const updateBudget = async (
  id,
  data
) => {

  await getBudgetById(id);

  await repository.updateBudget(
    id,
    data
  );

  return getBudgetById(id);
};

const deleteBudget = async (id) => {

  await getBudgetById(id);

  return repository.deleteBudget(id);
};

module.exports = {
  createBudget,
  getBudgetById,
  getBudgets,
  updateBudget,
  deleteBudget
};