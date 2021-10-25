import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import apiUrl from "../../config/httpConnect";

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
    width: "59%",
    margin: "10px",
  },
  input2: {
    width: "22%",
    margin: "10px",
  },
}));

const AddCosts = () => {
  const classes = useStyles();

  const [nomi, setNomi] = useState("");
  const [narxi, setNarxi] = useState("");

  const hozzi = new Date();
  let oy = hozzi.getMonth() + 1;
  if (oy <= 9) {
    oy = "0" + oy;
  }
  let kun = hozzi.getDate();
  let yil = hozzi.getFullYear();
  const sana = kun + "." + oy + "." + yil;

  const addCost = async () => {
    let newcost = {
      date: `${sana}`,
      items: [{ costName: `${nomi}`, costPrice: narxi * 1 }],
    };

    await axios
      .post(apiUrl.url + "/costs", newcost)
      .then((res) => {
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
          <h2>XARAJAT QUSHISH</h2>
        </div>
        <Grid>
          <TextField
            id="outlined-textarea"
            label="Nomi:"
            placeholder=""
            multiline
            className={classes.input}
            variant="outlined"
            value={nomi}
            onChange={(e) => setNomi(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Narxi:"
            multiline
            className={classes.input2}
            variant="outlined"
            value={narxi}
            onChange={(e) => setNarxi(e.target.value)}
          />
        </Grid>

        <Grid
          style={{
            margin: "10px",
            display: "flex",
          }}
        >
          <Grid item md={7}></Grid>
          <Button
            style={{
              display: "flex",
              float: "end",
            }}
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => {
              window.history.back();
            }}
          >
            Bekor Qilish
          </Button>
          <Button
            style={{
              display: "flex",
              marginLeft: "20px",
              float: "end",
            }}
            variant="contained"
            color="primary"
            disableElevation
            onClick={addCost}
          >
            Saqlash
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCosts;
