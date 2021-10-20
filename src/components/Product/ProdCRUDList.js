import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import axios from "axios";
import apiUrl from "../../config/httpConnect";

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

const ProdCRUDList = ({ prod, handleEdit }) => {
  const handleDel = (id) => {
    axios
      .delete(apiUrl.url + "/products/" + id)
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = (item) => {
    window.localStorage.setItem("item", JSON.stringify(item));
  };

  const classes = useStyles();

  return (
    <div>
      <TableContainer
        style={{ marginTop: "30px", marginBottom: "20px" }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                Nomi
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#3F51B5" }}
                align="right"
              >
                Tavsif
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#3F51B5" }}
                align="right"
              ></StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#3F51B5" }}
              ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prod.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
                </StyledTableCell>
                <StyledTableCell align="right">{item.desc}</StyledTableCell>

                <StyledTableCell align="right">
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
                    to={"/addproduct"}
                  >
                    <EditIcon
                      fontSize="default"
                      style={{ color: "green", marginLeft: "15%" }}
                    />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    onClick={() => {
                      handleAdd(item);
                    }}
                    component={Link}
                    to={"/addincoming"}
                  >
                    <AddCircleOutlineIcon fontSize="inherit" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProdCRUDList;
