export default function DashboardCards({summary}) {

    return (
        <>
            <h3>
                Budget:
                {summary.totalBudget}
            </h3>

            <h3>
                Expense:
                {summary.totalExpense}
            </h3>

            <h3>
                Remaining:
                {summary.remaining}
            </h3>
        </>
    );
}