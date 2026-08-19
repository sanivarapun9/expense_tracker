import { useState } from "react";

export default function BudgetForm({saveBudget}) {
    const [form, setForm] =
        useState({
            category: "",
            monthlyLimit: ""
        });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                saveBudget(form);
            }}
        >
            <input
                placeholder="Category"
                onChange={(e) => setForm({
                    ...form,
                    category: e.target.value
                })}
            />

            <input
                type="number"
                placeholder="Limit"
                onChange={(e) => setForm({
                    ...form,
                    monthlyLimit: e.target.value
                })}
            />

            <button>
                Save Budget
            </button>

        </form>

    );

}