import { useEffect, useState } from "react";

import { getDashboardSummary } from "../api/budgetApi";

import DashboardCards from "../components/DashboardCards";

export default function Dashboard() {
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        load();
    }, []);

    const load =async () => {
            const response = await getDashboardSummary();
            setSummary(response.data.data);
    };

    if (!summary) {
        return <h3> Loading... </h3>;
    }

    return (
        <DashboardCards
            summary={summary}
        />
    );

}