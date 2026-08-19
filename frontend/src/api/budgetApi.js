import api from "./axiosInstance";

export const getBudgets = () =>
    api.get("/api/budgets");

export const createBudget = (data) =>
    api.post("/api/budgets", data);

export const getAlerts = () =>
    api.get("/api/budgets/alerts");

export const getDashboardSummary = () =>
    api.get(
        "/api/budgets/summary/dashboard"
    );