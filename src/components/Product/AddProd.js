import { Button, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import apiUrl from '../../config/httpConnect';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '90%',
  },
  input: {
    width: '74%',
    margin: '10px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddProduct = (props) => {
  const classes = useStyles();

  const [categoriyasi, setCategoriyasi] = useState('');
  const [nomi, setNomi] = useState('');
  const [izoh, setIzoh] = useState('');
  const [id, setId] = useState();
  const [arr, setArr] = useState([]);

  let proId = window.localStorage.getItem('prodId');
  useEffect(() => {
    let categ = window.localStorage.getItem('categoriyalar');
    setArr(JSON.parse(categ));
    if (proId !== null) {
      axios
        .get(apiUrl.url + '/products/' + proId)
        .then((res) => {
        
        if (res.status === 200) {
          toast.success("MAXSULOT YUKLANDI");
        } else {
          toast.error("XATOLIK YUZ BERDI");
        }

          let prod = res.data;
          setNomi(prod.title);
          setIzoh(prod.desc);
          setId(prod.id);
        })
        .then(() => {
          // window.localStorage.removeItem('prodId');
        });
    }
    //eslint-disable-next-line
  }, []);

  const addPerson = async () => {
    let newprod = {
      category: `${categoriyasi}`,
      title: `${nomi}`,
      desc: `${izoh}`,
    };

    if (id !== undefined) {
      await axios
        .put(apiUrl.url + '/products/' + id, newprod)
        .then((res) => {
          if (res.status === 200) {
            toast.info("MAXSULOT YANGILANDI");
          } else {
            toast.error("XATOLIK YUZ BERDI");
          }
          window.history.back();
        })
        .catch((err) => {
          console.log('error Edit....', err);
        });
    } else {
      await axios
        .post(apiUrl.url + '/products', newprod)
        .then((res) => {
          if (res.status === 200) {
            toast.success("maxsulot saqlandi");
          } else {
            toast.error("xatolik yuz berdi");
          }
          window.history.back();
        })
        .catch((err) => {
          console.log('error....', err);
        });
    }
  };

  const handleChange = (event) => {
    setCategoriyasi(event.target.value);
  };

  return (
    <div>
      <Grid item md={12}>
        {console.log('dsadsads')}

        <div style={{ textAlign: 'center', display: 'flex' }}>
          {proId !== null ? (
            <h2> Productni Uzgartirish </h2>
          ) : (
            <h2>YANGI PRODUCT QUSHISH</h2>
          )}
        </div>
        <Grid>
          <TextField
            id='outlined-textarea'
            label='Nomi:'
            placeholder=''
            multiline
            className={classes.input}
            variant='outlined'
            value={nomi}
            onChange={(e) => setNomi(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Descreption:'
            placeholder='Izoh'
            multiline
            className={classes.input}
            variant='outlined'
            value={izoh}
            onChange={(e) => setIzoh(e.target.value)}
          />
          {proId == null ? (
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Category</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={categoriyasi}
                  onChange={handleChange}
                >
                  {arr.map((item) => {
                    return <MenuItem value={item.id}>{item.title}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
          ) : (
            <h1> </h1>
          )}
        </Grid>

        <Grid
          style={{
            margin: '10px',
            display: 'flex',
          }}
        >
          <Grid item md={6}></Grid>
          <Button
            style={{
              display: 'flex',
              float: 'end',
            }}
            variant='contained'
            color='primary'
            disableElevation
            onClick={() => {
              window.history.back();
            }}
          >
            Bekor Qilish
          </Button>
          <Button
            style={{
              display: 'flex',
              marginLeft: '20px',
              float: 'end',
            }}
            variant='contained'
            color='primary'
            disableElevation
            onClick={addPerson}
          >
            Saqlash
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
