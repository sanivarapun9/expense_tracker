const axios = require("axios");
const repository = require("../repositories/budgetRepository");
const getBudgetAlerts = async (userId, token) => {

    const budgets =
        await repository.getBudgets(
            userId
        );

    const expenseResponse =
        await axios.get(
            "http://localhost:5002/api/expenses/category-summary",
            {
                headers: {
                    Authorization: token
                }
            }
        );

    const summaries = expenseResponse.data.data;

    const alerts = [];

    budgets.forEach((budget) => {

        const expense =
            summaries.find(

                item =>
                    item.category === budget.category

            );

        const spent =
            Number(
                expense?.spent || 0
            );

        const limit =
            Number(budget.monthlyLimit);

        const percentage =
            (spent / limit) * 100;

        if (percentage >= 100) {

            alerts.push({
                category: budget.category,
                budget: limit,
                spent,
                percentage:
                    percentage.toFixed(2),
                status: "EXCEEDED"
            });

        }
        else if (percentage >= 80) {

            alerts.push({
                category: budget.category,
                budget: limit,
                spent,
                percentage:
                    percentage.toFixed(2),
                status: "WARNING"
            });

        }

    });

    return alerts;

};

const getDashboardSummary = async (userId, token) => {

    const budgets =
        await repository.getBudgets(
            userId
        );

    const budgetAmount =
        budgets.reduce(
            (sum, budget) =>
                sum +
                Number(
                    budget.monthlyLimit
                ),
            0
        );

    const expenseResponse =
        await axios.get(
            "http://localhost:5002/api/expenses/summary",
            {
                headers: {
                    Authorization: token
                }
            }
        );

    const totalExpense =
        expenseResponse.data.totalExpense;

    const alerts =
        await getBudgetAlerts(
            userId,
            token
        );

    return {

        totalBudget:
            budgetAmount,

        totalExpense,

        remaining:
            budgetAmount -
            totalExpense,

        alerts

    };

};

module.exports = {
    getBudgetAlerts,
    getDashboardSummary
};