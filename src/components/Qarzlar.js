import axios from "axios";
import React, { useEffect, useState } from "react";
import apiUrl from "../config/httpConnect";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  katta: {
    width: "90%",
  },
});

const Qarzlar = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  const hozzi = new Date();
  let oy = hozzi.getMonth() + 1;
  if (oy <= 9) {
    oy = "0" + oy;
  }
  let kun = hozzi.getDate();
  let yil = hozzi.getFullYear();
  const sana = kun + "." + oy + "." + yil;

  useEffect(() => {
    console.log(sana);
    axios
      .get(apiUrl.url + `/outgoingorders/debtors/${sana}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, [sana, setData]);

  return (
    <div>
      <TableContainer
        className={classes.katta}
        style={{ marginTop: "30px", marginBottom: "20px" }}
        component={Paper}
      >
        <h2 align="center">Bugun To'lov To'laydiganlar </h2>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                Ismi
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                Familiya
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                Telefon
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                To'lash vaqti
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                Qarzi
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item.name}>
                <StyledTableCell component="th" scope="row">
                  {item.customer.username}
                </StyledTableCell>
                <StyledTableCell>{item.customer.surname}</StyledTableCell>
                <StyledTableCell>{item.customer.phone}</StyledTableCell>
                <StyledTableCell>{item.payments[0].startDate}</StyledTableCell>
                <StyledTableCell>
                  {item.payments[0].paymentAmount}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Qarzlar;
