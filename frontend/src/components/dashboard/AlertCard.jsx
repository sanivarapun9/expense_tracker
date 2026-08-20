import {
 Card,
 CardContent,
 Typography
}
from "@mui/material";

export default function AlertCard({
 alert
}) {

 return (

  <Card
   sx={{
    mt: 2,
    borderLeft:
      alert.status ===
      "EXCEEDED"
      ? "5px solid red"
      : "5px solid orange"
   }}
  >

   <CardContent>

    <Typography>

      {alert.category}

    </Typography>

    <Typography>

      {alert.status}

    </Typography>

    <Typography>

      {alert.percentage} %

    </Typography>

   </CardContent>

  </Card>

 );

}