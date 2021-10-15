import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import apiUrl from "../config/httpConnect";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "90%",
  },
  input: {
    width: "74%",
    margin: "10px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddIncoming = () => {
  const classes = useStyles();

  const [narxi, setNarxi] = useState();
  const [soni, setSoni] = useState();
  const [vaqti, setVaqti] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    let item1 = window.localStorage.getItem("item");
    setItem(JSON.parse(item1));
  }, []);

  const addIncom = async () => {
    let newIco = {
      category: `${item.category.id}`,
      product: `${item.id}`,
      date: `${new Date(vaqti)}`,
      quantity: soni * 1,
      basePrice: narxi * 1,
    };

    await axios
      .post(apiUrl.url + "/incomingorders", newIco)
      .then((res) => {
        if (res.status === 200) {
          toast.success("saqlandi");          
        }else{
          toast.error("XATOLIK YUZ BERDI");
        }
        window.history.back();
      })
      .catch((err) => {
        console.log("error....", err);
      });
  };

  return (
    <div>
      <Grid item md={12}>
        <div style={{ textAlign: "center", display: "flex" }}>
          <h2>YANGI KELGAN MAHSULOTLAR</h2>
        </div>
        <Grid>
          <TextField
            id="outlined-textarea"
            label="Kelgan Vaqti:"
            placeholder=""
            multiline
            className={classes.input}
            variant="outlined"
            value={vaqti}
            onChange={(e) => setVaqti(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Narxi:"
            placeholder=""
            multiline
            className={classes.input}
            variant="outlined"
            value={narxi}
            onChange={(e) => setNarxi(e.target.value)}
          />

          <TextField
            id="outlined-textarea"
            label="Soni:"
            placeholder=""
            multiline
            className={classes.input}
            variant="outlined"
            value={soni}
            onChange={(e) => setSoni(e.target.value)}
          />
        </Grid>
        <Grid
          style={{
            margin: "10px",
            display: "flex",
          }}
        >
          <Grid item md={9}></Grid>
          <Button
            style={{
              display: "flex",
              marginLeft: "20px",
              float: "end",
            }}
            variant="contained"
            color="primary"
            disableElevation
            onClick={addIncom}
          >
            Saqlash
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default AddIncoming;
