import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import apiUrl from "../config/httpConnect";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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

const CustomerList = () => {
  const [custom, setCustom] = useState([]);
  const [liboy, setLiboy] = useState(true);

  useEffect(() => {
    axios.get(apiUrl.url + "/customers").then((res) => {
      setCustom(res.data);
    });
  }, [setCustom, liboy]);

  const handleDel = (id) => {
    axios
      .delete(apiUrl.url + "/customers/" + id)
      .then((res) => {
        console.log(res.status);
        setLiboy(!liboy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  return (
    <TableContainer style={{ marginTop: "30px" }} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ismi</StyledTableCell>
            <StyledTableCell align="right">Familiyasi</StyledTableCell>
            <StyledTableCell align="right">Sharifi</StyledTableCell>
            <StyledTableCell align="right">Pasport Seriyasi</StyledTableCell>
            <StyledTableCell align="right">JSHSHIR</StyledTableCell>
            <StyledTableCell align="right">Telefon Raqami</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {custom.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell component="th" scope="row">
                {item.username}
              </StyledTableCell>
              <StyledTableCell align="right">{item.surname}</StyledTableCell>
              <StyledTableCell align="right">{item.sheriff}</StyledTableCell>
              <StyledTableCell align="right">{item.pasSerNum}</StyledTableCell>
              <StyledTableCell align="right">{item.jshshir}</StyledTableCell>
              <StyledTableCell align="right">{item.phone}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  onClick={() => {
                    handleDel(item.id);
                  }}
                >
                  <DeleteIcon fontSize="inherit" color="error" />
                </IconButton>
                <IconButton>
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
