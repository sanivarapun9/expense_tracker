// controllers/budgetController.js

const service = require("../services/budgetService");
const dashboardService = require('../services/dashboardService')

exports.createBudget = async (req,res,next)=>{

try{

 const result =
 await service.createBudget({

   ...req.body,

   userId:req.user.userId

 });

 res.status(201).json({
   success:true,
   data:result
 });

}catch(error){

 next(error);

}
};

exports.getBudgets = async (req,res,next)=>{

try{

 const result =
 await service.getBudgets(
   req.user.userId
 );

 res.json({
   success:true,
   data:result
 });

}catch(error){

 next(error);

}
};

exports.getBudgetById = async (req,res,next)=>{

try{

 const result =
 await service.getBudgetById(
  req.params.id
 );

 res.json({
  success:true,
  data:result
 });

}catch(error){

 next(error);

}
};

exports.updateBudget = async (req,res,next)=>{

try{

 const result =
 await service.updateBudget(
  req.params.id,
  req.body
 );

 res.json({
  success:true,
  data:result
 });

}catch(error){

 next(error);

}
};

exports.deleteBudget = async (req,res,next)=>{

try{

 await service.deleteBudget(
  req.params.id
 );

 res.json({
   success:true,
   message:"Budget deleted"
 });

}catch(error){

 next(error);

}
};

exports.getAlerts = async (req,res,next)=>{

 try{

  const result =
  await dashboardService.getBudgetAlerts(
    req.user.userId,
    req.headers.authorization
  );

  res.json({
   success:true,
   data:result
  });

 }catch(error){

  next(error);

 }

};

exports.getDashboardSummary = async (req,res,next)=>{

 try{

  const result =
  await dashboardService.getDashboardSummary(
    req.user.userId,
    req.headers.authorization
  );

  res.json({
   success:true,
   data:result
  });

 }catch(error){

  next(error);

 }

};