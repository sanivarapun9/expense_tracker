// src/repositories/expenseRepository.js

const { where } = require("sequelize");
const { Expense } = require("../models");

const createExpense = async (data) => {
  return Expense.create(data);
};

const findById = async (id) => {
  return Expense.findByPk(id);
};

const updateExpense = async(id,data)=>{
  return Expense.update(data,{
    where:{id}
  })
}

const deleteExpense = async(id)=>{
  return Expense.destroy(
    {
      where:{id}
    }
  )
}

const getExpenses = (
  whereCaluse,
  limit,
  offset
)=>{
return Expense.findAndCountAll({
  where: whereCaluse,
  limit,
  offset,
  order:[["expenseDate", "DESC"]]
})
}

module.exports = {
  createExpense,
  findById,
  updateExpense,
  deleteExpense,
  getExpenses
};