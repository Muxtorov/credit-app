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
import apiUrl from "../../config/httpConnect";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  barr: {
    width: "200px",
  },
});

const AddCosts = () => {
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
    axios.get(apiUrl.url + "/costs/date/" + sana).then((res) => {
      if (res.status === 200) {
        toast.success("xarajat yuklandi");
      } else {
        toast.error("xarajat yuklanmadi");
      }
      setData(res.data);
    });
  }, [sana]);

  if (data.length > 0) {
    return (
      <TableContainer
        style={{ marginTop: "30px", marginBottom: "20px" }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            {/* <h2 align="center">Bugungi Xarajatlar</h2> */}
            <TableRow>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                Nomi
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                Narxi
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              return (
                <StyledTableRow key={item.items[0].costName}>
                  <StyledTableCell component="th" scope="row">
                    {item.items[0].costName}
                  </StyledTableCell>
                  <StyledTableCell className={classes.barr}>
                    {item.items[0].costPrice}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <h1 style={{ color: "#3F51B5" }}>Bugun Xarajat Qilinmadi</h1>;
  }
};

export default AddCosts;
