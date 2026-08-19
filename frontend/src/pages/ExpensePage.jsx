import { useEffect, useState } from "react";
import { getExpenses, createExpense} from "../api/expenseApi";
import ExpenseForm from "../components/ExpenseForm";

export default function ExpensePage() {
    const [expenses, setExpenses] =
        useState([]);

    const load = async () => {
            const response = await getExpenses();
            setExpenses(response.data.data.rows);
        };

    useEffect(() => {
        load();
    }, []);

    const saveExpense = async (data) => {
            await createExpense(data);
            load();
    };

    return (
        <>
            <ExpenseForm
                saveExpense={saveExpense}
            />
            {
                expenses.map(
                    expense => (
                        <div
                            key={expense.id}
                        >
                            {expense.title}
                            -
                            {expense.amount}
                        </div>
                    )
                )
            }
        </>

    );

}