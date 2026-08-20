import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

export default function StatCard({
  title,
  value
}) {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        transition:
          "transform 0.3s ease",
        "&:hover": {
          transform:
            "translateY(-4px)"
        }
      }}
    >
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
        >
          ₹ {value}
        </Typography>
      </CardContent>
    </Card>
  );
}