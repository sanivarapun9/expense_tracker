// src/repositories/expenseRepository.js

const { where } = require("sequelize");
const { Expense,sequelize } = require("../models");

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

const getCategorySummary = async (userId) => {

  return Expense.findAll({
    attributes: [
      "category",
      [
        sequelize.fn(
          "SUM",
          sequelize.col("amount")
        ),
        "spent"
      ]
    ],
    where: {
      userId
    },
    group: ["category"]
  });

};

const getTotalExpenses = async (userId) => {

  const total = await Expense.sum(
    "amount",
    {
      where: {
        userId
      }
    }
  );

  return total || 0;
};

module.exports = {
  createExpense,
  findById,
  updateExpense,
  deleteExpense,
  getExpenses,
  getCategorySummary,
  getTotalExpenses
};