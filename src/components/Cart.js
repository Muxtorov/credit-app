import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const Cart = () => {
  //   const [state, setState] = useState([]);
  const [selectedValue, setSelectedValue] = React.useState("oy0");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const data = useSelector((state) => {
    return state.cart.items;
  });
  console.log(data);
  console.log(selectedValue);
  const rows = data;
  console.log(data);
  function rowTotal(quan, price, percent) {
    let foiz = -1;
    switch (selectedValue) {
      case "oy0":
        foiz = percent[0].oy0;
        break;
      case "oy3":
        foiz = percent[1].oy3;
        break;
      case "oy6":
        foiz = percent[2].oy6;
        break;
      case "oy9":
        foiz = percent[3].oy9;
        break;
      case "oy12":
        foiz = percent[4].oy12;
        break;
      default:
        break;
    }
    return quan * ((price * foiz) / 100 + price);
  }

  return (
    <div style={{ marginRight: "30px" }}>
      <div>
        <Radio
          checked={selectedValue === "oy0"}
          onChange={handleChange}
          value="oy0"
          name="radio-button-demo"
          label="0 oy"
          labelPlacement="start"
          inputProps={{ "aria-label": "A" }}
          style={{ marginLeft: "40px" }}
        />
        <span>0 oy</span>
        <Radio
          checked={selectedValue === "oy3"}
          onChange={handleChange}
          value="oy3"
          name="radio-button-demo"
          inputProps={{ "aria-label": "A" }}
          style={{ marginLeft: "40px" }}
        />
        <span>3 oy</span>
        <Radio
          checked={selectedValue === "oy6"}
          onChange={handleChange}
          value="oy6"
          name="radio-button-demo"
          inputProps={{ "aria-label": "A" }}
          style={{ marginLeft: "40px" }}
        />
        <span>6 oy</span>
        <Radio
          checked={selectedValue === "oy9"}
          onChange={handleChange}
          value="oy9"
          name="radio-button-demo"
          inputProps={{ "aria-label": "A" }}
          style={{ marginLeft: "40px" }}
        />
        <span>9 oy</span>
        <Radio
          checked={selectedValue === "oy12"}
          onChange={handleChange}
          value="oy12"
          name="radio-button-demo"
          inputProps={{ "aria-label": "A" }}
          style={{ marginLeft: "40px" }}
        />
        <span>12 oy</span>
      </div>
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
                  {rowTotal(row.quantity, row.price, row.category.percent)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
