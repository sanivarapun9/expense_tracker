import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
 Paper
}
from "@mui/material";

export default function ExpenseTable({
 expenses
}) {

 return (

 <Paper>

 <Table>

  <TableHead>

   <TableRow>

    <TableCell>
      Title
    </TableCell>

    <TableCell>
      Category
    </TableCell>

    <TableCell>
      Amount
    </TableCell>

    <TableCell>
      Date
    </TableCell>

   </TableRow>

  </TableHead>

  <TableBody>

   {expenses.map(
    (expense) => (

    <TableRow
      key={expense.id}
    >

     <TableCell>
      {expense.title}
     </TableCell>

     <TableCell>
      {expense.category}
     </TableCell>

     <TableCell>
      ₹ {expense.amount}
     </TableCell>

     <TableCell>
      {
       expense.expenseDate
      }
     </TableCell>

    </TableRow>

   ))}

  </TableBody>

 </Table>

 </Paper>

 );

}