// controllers/expenseController.js

const service = require("../services/expenseService");

exports.createExpense = async (req, res, next) => {

  try {

    const result =
      await service.createExpense({
        ...req.body,
        userId: req.user.userId
      });

    res.status(201).json({
      success: true,
      data: result
    });

  } catch (error) {
    next(error);
  }
};

exports.getExpenses = async (req, res, next) => {

  try {

    const page =
      Number(req.query.page) || 1;

    const size =
      Number(req.query.size) || 10;

    const result =
      await service.getExpenses(
        req.user.userId,
        req.query.category,
        page,
        size
      );

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    next(error);
  }
};

exports.getExpenseById = async (req, res, next) => {

  try {

    const result =
      await service.getExpenseById(
        req.params.id
      );

    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    next(error);
  }
};

exports.updateExpense = async (req, res, next) => {

  try {

    const result =
      await service.updateExpense(
        req.params.id,
        req.body
      );

    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    next(error);
  }
};

exports.deleteExpense = async (req, res, next) => {

  try {

    await service.deleteExpense(
      req.params.id
    );

    res.json({
      success: true,
      message: "Expense deleted"
    });

  } catch (error) {
    next(error);
  }
};

exports.categorySummary = async (req,res,next)=>{

 try{

  const result =
   await service.getCategorySummary(
    req.user.userId
   );

  res.status(200).json({
   success:true,
   data:result
  });

 }catch(error){

  next(error);

 }
};

exports.totalSummary = async (req,res,next)=>{

 try{

  const result =
   await service.getTotalExpenses(
    req.user.userId
   );

  res.status(200).json({
   success:true,
   totalExpense:result
  });

 }catch(error){

  next(error);

 }
};