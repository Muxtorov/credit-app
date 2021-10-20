import React, { useEffect, useState } from "react";
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
import axios from "axios";
import apiUrl from "../../config/httpConnect";
import ModalComponent from "../Modal/ModalComponent";

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

const CategoryList = ({ handleDel, handleEdit }) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl.url + "/categorys").then((res) => {
      setData(res.data);
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                0 oy
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                3 oy
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                6 oy
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                9 oy
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                12 oy
              </StyledTableCell>

              <StyledTableCell
                style={{ backgroundColor: "#3F51B5" }}
                align="right"
              ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, ind) => (
              <StyledTableRow key={ind}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
                </StyledTableCell>
                <StyledTableCell>+{item.percent[0].oy0}%</StyledTableCell>
                <StyledTableCell>+{item.percent[1].oy3}%</StyledTableCell>
                <StyledTableCell>+{item.percent[2].oy6}%</StyledTableCell>
                <StyledTableCell>+{item.percent[3].oy9}%</StyledTableCell>
                <StyledTableCell>+{item.percent[4].oy12}%</StyledTableCell>

                <StyledTableCell align="right">
                  <IconButton
                    onClick={() => {
                      setItem(item.id);
                      handleOpen();
                    }}
                  >
                    <DeleteIcon fontSize="inherit" color="error" />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                    component={Link}
                    to={"/addcategory"}
                  >
                    <EditIcon style={{ color: "green", marginLeft: "15%" }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalComponent
        open={open}
        onClose={handleClose}
        item={item}
        handleClose={handleClose}
        handleDel={handleDel}
        setOpen={setOpen}
      />
    </div>
  );
};

export default CategoryList;
