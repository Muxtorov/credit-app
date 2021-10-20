import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { withStyles } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";
import Radio from '@material-ui/core/Radio';
// import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../config/httpConnect';
import { makeStyles, TextField } from '@material-ui/core';

// const GreenRadio = withStyles({
//   root: {
//     color: green[400],
//     "&$checked": {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  input: {
    width: '30%',
    margin: '10px',
  },
}));

const Cart = () => {
  const classes = useStyles();

  // const [state, setState] = useState(0);
  var totalSum = 0;
  const [selectedValue, setSelectedValue] = React.useState('oy0');
  const [date, setDate] = useState(new Date());
  const [discount, setDiscount] = useState(0);
  const [payment, setPayment] = useState([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const data = useSelector((state) => {
    return state.cart;
  });

  const rows = data.items;

  function rowTotal(quan, price, percent) {
    let foiz = -1;
    switch (selectedValue) {
      case 'oy0':
        foiz = percent[0].oy0;
        break;
      case 'oy3':
        foiz = percent[1].oy3;
        break;
      case 'oy6':
        foiz = percent[2].oy6;
        break;
      case 'oy9':
        foiz = percent[3].oy9;
        break;
      case 'oy12':
        foiz = percent[4].oy12;
        break;
      default:
        break;
    }
    var s = quan * ((price * foiz) / 100 + price);

    total(s);
    return s;
  }

  function total(s) {
    totalSum += s;
  }

  
  function dateHisob() {
    var now = new Date(date);
    var n = selectedValue.slice(2) * 1;

    var current;
    let pay = [];
    let oylikSum = ((totalSum - discount) / n).toFixed(2) * 1;
    for (let i = 0; i < n; i++) {
      if (now.getMonth() === 11) {
        current = new Date(now.getFullYear() + 1, 0, now.getDate());
      } else {
        current = new Date(
          now.getFullYear(),
          now.getMonth() + 1,
          now.getDate()
        );
      }

      pay.push({
        startDate: current,
        paymentAmount: oylikSum,
        paymentDate: 0,
        amountPaid: 0,
      });
      now = current;
    }
    setPayment(pay);
  }
  // function paymentHisob() {}

  function sendBackend() {
    let date1 = date.toString();
    console.log(date1.split('-'));
    let oy = date1[1];
    let kun = date1[2];
    let yil = date1[0];
    const sanas = kun + '.' + oy + '.' + yil;
    const sendData = {
      customer: data.customer.id,
      items: data.items,
      payments: payment,
      date: sanas,
      lifetime: selectedValue.slice(2) * 1,
      total: totalSum,
      bonus: [],
      discount: discountSumma() * 1,
      grandTotal: totalSum - discountSumma(),
    };

    axios
      .post(apiUrl.url + '/outgoingorders', sendData)
      .then((res) => {
        window.localStorage.setItem("sendData", JSON.stringify(sendData));
      })
      .then((response) => alert(response));
  }
  function discountSumma() {
    return ((totalSum / 100) * discount).toFixed() * 1;
  }

  return (
    <div style={{ marginRight: '30px' }}>
      <div>
        <Radio
          checked={selectedValue === 'oy0'}
          onChange={handleChange}
          value='oy0'
          name='radio-button-demo'
          label='0 oy'
          labelPlacement='start'
          inputProps={{ 'aria-label': 'A' }}
          style={{ marginLeft: '40px' }}
        />
        <span>0 oy</span>
        <Radio
          checked={selectedValue === 'oy3'}
          onChange={handleChange}
          value='oy3'
          name='radio-button-demo'
          inputProps={{ 'aria-label': 'A' }}
          style={{ marginLeft: '40px' }}
        />
        <span>3 oy</span>
        <Radio
          checked={selectedValue === 'oy6'}
          onChange={handleChange}
          value='oy6'
          name='radio-button-demo'
          inputProps={{ 'aria-label': 'A' }}
          style={{ marginLeft: '40px' }}
        />
        <span>6 oy</span>
        <Radio
          checked={selectedValue === 'oy9'}
          onChange={handleChange}
          value='oy9'
          name='radio-button-demo'
          inputProps={{ 'aria-label': 'A' }}
          style={{ marginLeft: '40px' }}
        />
        <span>9 oy</span>
        <Radio
          checked={selectedValue === 'oy12'}
          onChange={handleChange}
          value='oy12'
          name='radio-button-demo'
          inputProps={{ 'aria-label': 'A' }}
          style={{ marginLeft: '40px' }}
        />
        <span>12 oy</span>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label='spanning table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' colSpan={3}>
                {data.customer == null ? (
                  ''
                ) : (
                  <h2 style={{ color: 'blue' }}>
                    {data.customer.surname + ' ' + data.customer.username}{' '}
                  </h2>
                )}
              </TableCell>
              <TableCell align='right'>Narxi</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>maxsulot nomi</TableCell>
              <TableCell align='right'>Maxsulot narxi</TableCell>
              <TableCell align='right'>Maxsulot soni</TableCell>
              <TableCell align='right'>Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.product}>
                <TableCell>{row.title}</TableCell>
                <TableCell align='right'>{row.price}</TableCell>
                <TableCell align='right'>{row.quantity}</TableCell>
                <TableCell align='right'>
                  {rowTotal(row.quantity, row.price, row.percent)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align='center' colSpan={4}>
                <span style={{ marginRight: '80px' }}>
                  Jami:
                  {totalSum}
                </span>
                <span style={{ marginRight: '80px' }}>
                  Chegirma:
                  {discountSumma()}
                </span>
                Qoldi {totalSum - discountSumma()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ margin: '20px' }}>
        {/* <h2 style={{ display: "inline-block" }}>Chegirma:</h2> */}
        <TextField
          id='outlined-textarea'
          label='Chegirma:'
          placeholder=''
          multiline
          className={classes.input}
          variant='outlined'
          onChange={(e) => {
            setDiscount(e.target.value);
          }}
        />
        {/* <input
          type="number"
          id="discou"
          
          style={{ fontSize: "20px" }}
        /> */}

        <h2 style={{ display: 'inline-block', marginLeft: '5%' }}>
          Sanani kiriting:
        </h2>
        <input
          type='date'
          id='date'
          onChange={(e) => {
            setDate(e.target.value);
          }}
          style={{ fontSize: '20px' }}
        />
        <Button
          style={{ margin: '20px' }}
          variant='contained'
          color='primary'
          onClick={() => {
            dateHisob();
          }}
        >
          ok
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label='spanning table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' colSpan={3}>
                foo
              </TableCell>
              <TableCell align='right'>Narxi</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>T/r</TableCell>
              <TableCell align='right'>To'lov Sanasi</TableCell>
              <TableCell align='right'>To'lash kerak bo'lgan summa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payment.map((row, ind) => (
              <TableRow key={ind}>
                <TableCell>{ind + 1}</TableCell>
                <TableCell align='right'>
                  {row.startDate.getDate()}.{row.startDate.getMonth() + 1}.
                  {row.startDate.getFullYear()}
                </TableCell>
                <TableCell align='right'>{row.paymentAmount}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align='center' colSpan={4}>
                Jami:
                {totalSum - discountSumma()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        component={Link}
        to={'/contract'}
        onClick={() => {
          sendBackend();
        }}
        style={{ margin: '20px' }}
        variant='contained'
        color='primary'
      >
        chop etish
      </Button>
    </div>
  );
};

export default Cart;
