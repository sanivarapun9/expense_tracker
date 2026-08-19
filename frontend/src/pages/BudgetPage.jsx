import { useEffect, useState } from "react";
import { getBudgets, createBudget } from "../api/budgetApi";
import BudgetForm from "../components/BudgetForm";

export default function BudgetPage() {

    const [budgets, setBudgets] = useState([]);
    const load = async () => {
        const response = await getBudgets();
        setBudgets(response.data.data);
    };

    useEffect(() => {
        load();
    }, []);

    const saveBudget = async (data) => {
        await createBudget(data);
        load();
    };

    return (
        <>
            <BudgetForm
                saveBudget={
                    saveBudget
                }
            />

            {
                budgets.map(
                    budget => (
                        <div key={budget.id}>
                            {budget.category}
                            -
                            {budget.monthlyLimit}
                        </div>
                    )
                )
            }
        </>

    );

}