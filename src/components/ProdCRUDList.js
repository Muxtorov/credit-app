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

const CustomerList = () => {
  const [custom, setCustom] = useState([]);
  const [liboy, setLiboy] = useState(true);

  useEffect(() => {
    axios.get(apiUrl.url + "/products").then((res) => {
      setCustom(res.data);
    });
  }, [setCustom, liboy]);

  const handleDel = (id) => {
    axios
      .delete(apiUrl.url + "/products/" + id)
      .then((res) => {
        console.log(res.status);
        setLiboy(!liboy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    console.log("EDIT", id);
    window.localStorage.setItem("customId", `${id}`);
  };

  const classes = useStyles();

  return (
    <TableContainer
      style={{ marginTop: "30px", marginBottom: "20px" }}
      component={Paper}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nomi</StyledTableCell>
            <StyledTableCell>Narxi</StyledTableCell>
            <StyledTableCell>?:Soni</StyledTableCell>

            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {custom.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.title}
              </StyledTableCell>
              <StyledTableCell>{item.price}</StyledTableCell>
              <StyledTableCell>{item.z}</StyledTableCell>
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
                    handleEdit(item.id);
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
