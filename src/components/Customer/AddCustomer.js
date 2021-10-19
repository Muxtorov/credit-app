import { Button, Grid, Switch, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import apiUrl from '../../config/httpConnect';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../components/Loading';

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
}));

const AddCustomer = () => {
  const classes = useStyles();

  const [ism, setIsm] = useState('');
  const [familiya, setFamiliya] = useState('');
  const [sharif, setSharif] = useState('');
  const [pasport, setPasport] = useState('');
  const [jshshir, setJshshir] = useState('');
  const [telefon, setTelefon] = useState('');
  const [telefon2, setTelefon2] = useState('');
  const [bdata, setBdata] = useState('');
  const [berildi, setBerildi] = useState('');
  const [adress, setAdress] = useState('');
  const [ishjoyi, setIshjoyi] = useState('');
  const [kafil, setKafil] = useState('');
  const [test, setTest] = useState(false);
  const [activ, setActiv] = useState(true);
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  let customId = window.localStorage.getItem('customId');

  if (customId !== null) {
    setTest(true);
    setLoading(true);
    axios
      .get(apiUrl.url + '/customers/id/' + customId)

      .then((res) => {
        if (res.status === 200) {
          toast.success('mijoz yuklandi');
        } else {
          toast.error('xatolik yuz berdi');
        }
        let pers = res.data;
        setIsm(pers.username);
        setFamiliya(pers.surname);
        setSharif(pers.sheriff);
        setPasport(pers.pasSerNum);
        setJshshir(pers.jshshir);
        setTelefon(pers.phone);
        setTelefon2(pers.phone2);
        setBdata(pers.birthDate);
        setAdress(pers.address);
        setActiv(pers.active);
        setId(pers.id);
        setIshjoyi(pers.workplace);
        setBerildi(pers.pasIssueDate);
        setKafil(pers.guarantor);
      })
      .finally(() => setLoading(false));

    window.localStorage.removeItem('customId');
  }

  const addPerson = () => {
    let person = {
      username: `${ism.trim()}`,
      surname: `${familiya.trim()}`,
      birthDate: `${bdata.trim()}`,
      pasIssueDate: `${berildi.trim()}`,
      workplace: `${ishjoyi.trim()}`,
      sheriff: `${sharif.trim()}`,
      address: `${adress.trim()}`,
      pasSerNum: `${pasport.trim()}`,
      jshshir: `${jshshir.trim()}`,
      phone: `${telefon.trim()}`,
      guarantor: `${kafil.trim()}`,
      phone2: `${telefon2.trim()}`,
      active: true,
    };
    if (test === true) {
      setLoading(true);
      axios
        .put(apiUrl.url + '/customers/id/' + id, person)
        .then((res) => {
          if (res.status === 200) {
            toast.success('mijoz yangilandi');
          } else {
            toast.error('xato');
          }

          window.history.back();
        })
        .finally(() => setLoading(false))
        .catch((err) => {
          console.log('error Edit....', err);
        });
    } else {
      setLoading(true);
      axios
        .post(apiUrl.url + '/customers', person)
        .then((res) => {
          if (res.status === 200) {
            toast.success('mijoz saqlandi');
          } else {
            toast.error('xato saqlanmadi');
          }
          window.history.back();
        })
        .finally(() => setLoading(false))
        .catch((err) => {
          console.log('error....', err);
        });
    }
  };
  if (loading) return <Loading />;
  return (
    <div>
      <Grid item md={12}>
        <div style={{ textAlign: 'center', display: 'flex' }}>
          {id !== '' ? (
            <h2> MIJOZNI UZGARTIRISH </h2>
          ) : (
            <h2>YANGI MIJOZNING MA'LUMOTLARI</h2>
          )}
        </div>
        <Grid>
          <TextField
            id='outlined-textarea'
            label='Ism:'
            placeholder='John'
            multiline
            className={classes.input}
            variant='outlined'
            value={ism}
            onChange={(e) => {
              setIsm(e.target.value);
            }}
          />
          <TextField
            id='outlined-textarea'
            label='Familiya:'
            placeholder='Doe'
            multiline
            className={classes.input}
            variant='outlined'
            value={familiya}
            onChange={(e) => setFamiliya(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Sharifi:'
            placeholder='John'
            multiline
            className={classes.input}
            variant='outlined'
            value={sharif}
            onChange={(e) => setSharif(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Passport Seriyasi'
            placeholder='AA0000000'
            multiline
            className={classes.input}
            variant='outlined'
            value={pasport}
            onChange={(e) => setPasport(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='JSHSHIR:'
            placeholder='12345678901234'
            multiline
            className={classes.input}
            variant='outlined'
            value={jshshir}
            onChange={(e) => setJshshir(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Telefon:'
            placeholder='+998 99 777 77 77'
            multiline
            className={classes.input}
            variant='outlined'
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label="Tug'ilgan sanasi:"
            placeholder='01.01.1991'
            multiline
            className={classes.input}
            variant='outlined'
            value={bdata}
            onChange={(e) => setBdata(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Manzil:'
            placeholder='Yashash Joyi'
            multiline
            className={classes.input}
            variant='outlined'
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Pasport berilgan vaqti:'
            placeholder='20.20.2020'
            multiline
            className={classes.input}
            variant='outlined'
            value={berildi}
            onChange={(e) => setBerildi(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Ish Joyi:'
            placeholder='Ish joyi va lavozimi'
            multiline
            className={classes.input}
            variant='outlined'
            value={ishjoyi}
            onChange={(e) => setIshjoyi(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Kafil FISH:'
            placeholder='Kafilning ism, familiya, sharifi'
            multiline
            className={classes.input}
            variant='outlined'
            value={kafil}
            onChange={(e) => setKafil(e.target.value)}
          />
          <TextField
            id='outlined-textarea'
            label='Telefon (Kafilniki):'
            placeholder='+998 99 777 77 77'
            multiline
            className={classes.input}
            variant='outlined'
            value={telefon2}
            onChange={(e) => setTelefon2(e.target.value)}
          />
        </Grid>
        <Grid
          style={{
            margin: '10px',
            display: 'flex',
          }}
        >
          <Grid item md={6}>
            <spam style={{ fontSize: '22px' }}>Faolligi:</spam>
            <Switch
              style={{ display: 'flex' }}
              color='primary'
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
              value={activ}
              onChange={(e) => setActiv(e.target.checked)}
              defaultChecked='true'
            />
          </Grid>

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

export default AddCustomer;
