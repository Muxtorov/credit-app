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
import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "../Modal/ModalComponent";
import { Checkbox } from "@material-ui/core";

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
    // minWidth: 700,
    width: "100%",
  },
  paper: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%,   -50%)`,
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: "#2E7EF6",
    color: "#fff",
    padding: "30px",
  },
});

const CustomerList = ({ custom, handleDel, handleEdit }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(0);

  const customer = useSelector((state) => state.cart.customer);

  const dispatch = useDispatch();

  function AddCustomer(data) {
    dispatch({ type: "ADD_CUSTOMER", payload: { data } });
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer
        style={{
          marginTop: "30px",
          marginBottom: "20px",
        }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                style={{ backgroundColor: "#3F51B5" }}
              ></StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#3F51B5" }}
                className={classes.barr}
              >
                Ismi
              </StyledTableCell>

              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                JSHSHIR
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#3F51B5" }}>
                Telefon Raqami
              </StyledTableCell>
              <StyledTableCell
                style={{ backgroundColor: "#3F51B5" }}
              ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {custom.map((item) => (
              <StyledTableRow key={item.name}>
                <StyledTableCell>
                  <Button
                    onClick={() => {
                      AddCustomer(item);
                      // alert('Xaridor tanlandi');
                    }}
                  >
                    <Checkbox
                      checked={customer?.id === item.id}
                      color="primary"
                    />
                    {/* <CheckCircleIcon style={{ color: '#3F51B5' }} /> */}
                  </Button>
                </StyledTableCell>
                <StyledTableCell
                  className={classes.barr}
                  component="th"
                  scope="row"
                >
                  {item.username.toUpperCase()} {item.surname.toUpperCase()}
                </StyledTableCell>
                <StyledTableCell>{item.jshshir}</StyledTableCell>
                <StyledTableCell>{item.phone}</StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    onClick={() => {
                      handleOpen();
                      setItem(item.id);
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
      <ModalComponent
        open={open}
        onClose={handleClose}
        item={item}
        handleClose={handleClose}
        handleDel={handleDel}
        setOpen={setOpen}
      />
    </>
  );
};

export default CustomerList;
