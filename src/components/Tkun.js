import React from "react";
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
    marginLeft: "-60px",
  },
});

const Tkun = (data) => {
  const classes = useStyles();

  if (data.length > 0) {
    return (
      <div>
        <TableContainer
          className={classes.katta}
          style={{ marginTop: "30px", marginBottom: "20px" }}
          component={Paper}
        >
          <h2 align="center">Bugun Tug'ilgan Mijozlar</h2>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <StyledTableRow key={item.name}>
                  <StyledTableCell component="th" scope="row">
                    {item.username}
                  </StyledTableCell>
                  <StyledTableCell>{item.surname}</StyledTableCell>
                  <StyledTableCell>{item.phone}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return <h1>Bugun Tug'ilgan Mijozlar Yuq</h1>;
  }
};

export default Tkun;
