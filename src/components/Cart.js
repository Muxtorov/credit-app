import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Cart = () => {
  //   const [state, setState] = useState([]);
  const data = useSelector((state) => {
    return state.cart.items;
  });
  console.log(data);

  const rows = data;

  function rowTotal(a, b) {
    return a * b;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Customer Name
            </TableCell>
            <TableCell align="right">Narxi</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>maxsulot nomi</TableCell>
            <TableCell align="right">Maxsulot narxi</TableCell>
            <TableCell align="right">Maxsulot soni</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.productId}>
              <TableCell>{row.productName}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                {rowTotal(row.quantity, row.price)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
