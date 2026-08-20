import { Pie } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import {
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";

Chart.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function ExpensePieChart({
  chartData
}) {
  const data = {
    labels: chartData.map(
      (item) => item.category
    ),

    datasets: [
      {
        label: "Expenses",

        data: chartData.map(
          (item) => Number(item.spent)
        ),

        backgroundColor: [
          "#1976d2",
          "#2e7d32",
          "#ed6c02",
          "#9c27b0",
          "#d32f2f",
          "#0288d1",
          "#fbc02d"
        ],

        borderWidth: 2,
        borderColor: "#fff"
      }
    ]
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom"
      },

      title: {
        display: false
      }
    }
  };

  return (
    <Card
      elevation={4}
      sx={{
        mt: 4,
        borderRadius: 3
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
        >
          Expense Distribution
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={3}
        >
          Category wise expense breakdown
        </Typography>

        <Box
          sx={{
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Pie
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
}