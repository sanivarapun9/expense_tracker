import { useState } from "react";

export default function ExpenseForm({saveExpense}) {
    const [form, setForm] =
        useState({
            title: "",
            category: "",
            amount: "",
            expenseDate: "",
            notes: ""

        });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                saveExpense(form);
            }}
        >
            <input
                placeholder="Title"
                onChange={(e) => setForm({
                    ...form,
                    title: e.target.value
                })}
            />

            <input
                placeholder="Category"
                onChange={(e) => setForm({
                    ...form,
                    category: e.target.value
                })}
            />

            <input
                type="number"
                placeholder="Amount"
                onChange={(e) => setForm({
                    ...form,
                    amount: e.target.value
                })}
            />

            <button>
                Save
            </button>

        </form>

    );

}