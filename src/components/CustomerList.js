import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

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
    minWidth: 700,
  },
});

const CustomerList = ({ custom, handleDel, handleEdit }) => {
  const classes = useStyles();

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <TableContainer
      style={{ marginTop: "30px", marginBottom: "20px" }}
      component={Paper}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Ismi</StyledTableCell>
            <StyledTableCell>Familiyasi</StyledTableCell>
            <StyledTableCell>Sharifi</StyledTableCell>
            <StyledTableCell>Pasport Seriyasi</StyledTableCell>
            <StyledTableCell>JSHSHIR</StyledTableCell>
            <StyledTableCell>Telefon Raqami</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {custom.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell>
                <Button
                  component={Link}
                  style={{ display: "flex" }}
                  variant="contained"
                  color="primary"
                  disableElevation
                  to={"/contract"}
                >
                  info
                </Button>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.username}
              </StyledTableCell>
              <StyledTableCell>{item.surname}</StyledTableCell>
              <StyledTableCell>{item.sheriff}</StyledTableCell>
              <StyledTableCell>{item.pasSerNum}</StyledTableCell>
              <StyledTableCell>{item.jshshir}</StyledTableCell>
              <StyledTableCell>{item.phone}</StyledTableCell>
              <StyledTableCell>
                <IconButton
                  onClick={() => {
                    handleDel(item.id);
                  }}
                >
                  <DeleteIcon fontSize="inherit" color="error" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleClick(item.id);
                  }}
                  component={Link}
                  to={"/addcustomer"}
                >
                  <EditIcon
                    fontSize="default"
                    style={{ color: "green", marginLeft: "15%" }}
                  />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerList;
