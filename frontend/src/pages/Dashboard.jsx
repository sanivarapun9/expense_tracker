import {
    Grid,
    Typography,
    Box,
    Container,
    Card,
    CardContent,
    Divider,
    Chip
} from "@mui/material";

import { useEffect, useState } from "react";

import { getDashboardSummary } from "../api/budgetApi";
import { getCategorySummary } from "../api/expenseApi";

import StatCard from "../components/dashboard/StatCard";
import ExpensePieChart from "../components/dashboard/ExpensePieChart";

export default function Dashboard() {
    const [summary, setSummary] = useState(null);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const summaryResponse =
                await getDashboardSummary();

            setSummary(
                summaryResponse.data.data
            );

            const chartResponse =
                await getCategorySummary();

            setChartData(
                chartResponse.data.data
            );
        } catch (error) {
            console.error(error);
        }
    };

    if (!summary) {
        return <h3>Loading...</h3>;
    }

    return (
        <Container>
            {/* Header */}

            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    Financial Dashboard
                </Typography>

                <Typography
                    color="text.secondary"
                    mt={1}
                >
                    Monitor budgets, expenses and
                    spending trends.
                </Typography>
            </Box>

            {/* Summary Cards */}

            <Grid container spacing={3} >
                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard
                        title="Total Budget"
                        value={summary.totalBudget}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard
                        title="Total Expenses"
                        value={summary.totalExpense}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard
                        title="Remaining Balance"
                        value={summary.remaining}
                    />
                </Grid>
            </Grid>


            {/* Charts & Alerts */}

            <Grid
                container
                spacing={3}
                mt={1}
            >
                <Grid size={{ xs: 12, md: 8 }}>

                    <ExpensePieChart
                        chartData={chartData}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card
                        elevation={4}
                        sx={{
                            borderRadius: 3,
                            mt:4
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                mb={2}
                            >
                                Budget Alerts
                            </Typography>

                            <Divider sx={{ mb: 2 }} />

                            {summary.alerts?.length >
                                0 ? (
                                summary.alerts.map(
                                    (alert, index) => (
                                        <Box
                                            key={index}
                                            mb={2}
                                        >
                                            <Typography>
                                                {
                                                    alert.category
                                                }
                                            </Typography>

                                            <Chip
                                                label={
                                                    alert.status
                                                }
                                                color={
                                                    alert.status ===
                                                        "EXCEEDED"
                                                        ? "error"
                                                        : "warning"
                                                }
                                                sx={{ mt: 1 }}
                                            />
                                        </Box>
                                    )
                                )
                            ) : (
                                <Typography
                                    color="text.secondary"
                                >
                                    No active alerts
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}