import { Button, Grid, Switch, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import apiUrl from "../config/httpConnect";

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
}));

const AddCustomer = (props) => {
  const classes = useStyles();

  const [ism, setIsm] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [sharif, setSharif] = useState("");
  const [pasport, setPasport] = useState("");
  const [jshshir, setJshshir] = useState("");
  const [telefon, setTelefon] = useState("+998");
  const [activ, setActiv] = useState(true);
  const [id, setId] = useState("");

  let customId = window.localStorage.getItem("customId");

  if (customId !== null) {
    axios.get(apiUrl.url + "/customers/" + customId).then((res) => {
      let pers = res.data;
      setIsm(pers.username);
      setFamiliya(pers.surname);
      setSharif(pers.sheriff);
      setPasport(pers.pasSerNum);
      setJshshir(pers.jshshir);
      setTelefon(pers.phone);
      setActiv(pers.active);
      setId(pers.customId);
    });

    window.localStorage.removeItem("customId");
  }

  const addPerson = async () => {
    let person = {
      username: `${ism}`,
      surname: `${familiya}`,
      sheriff: `${sharif}`,
      pasSerNum: `${pasport}`,
      jshshir: `${jshshir}`,
      phone: `${telefon}`,
      active: activ,
    };
    if (customId !== null) {
      await axios
        .put(apiUrl.url + "/customers/" + id, person)
        .then((res) => {
          console.log("Then Edit....", res.status);
        })
        .catch((err) => {
          console.log("error Edit....", err);
        });
    } else {
      await axios
        .post(apiUrl.url + "/customers", person)
        .then((res) => {
          window.history.back();
        })
        .catch((err) => {
          console.log("error....", err);
        });
    }
  };

  return (
    <div>
      <Grid item md={12}>
        <div style={{ textAlign: "center", display: "flex" }}>
          <h2>YANGI MIJOZNING MA'LUMOTLARI</h2>
        </div>
        <Grid>
          <TextField
            id="outlined-textarea"
            label="Ism:"
            placeholder="John"
            multiline
            className={classes.input}
            variant="outlined"
            value={ism}
            onChange={(e) => {
              setIsm(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Familiya:"
            placeholder="Doe"
            multiline
            className={classes.input}
            variant="outlined"
            value={familiya}
            onChange={(e) => setFamiliya(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Sharifi:"
            placeholder="John"
            multiline
            className={classes.input}
            variant="outlined"
            value={sharif}
            onChange={(e) => setSharif(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Passport Seriyasi"
            placeholder="AA0000000"
            multiline
            className={classes.input}
            variant="outlined"
            value={pasport}
            onChange={(e) => setPasport(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="JSHSHIR:"
            placeholder="12345678901234"
            multiline
            className={classes.input}
            variant="outlined"
            value={jshshir}
            onChange={(e) => setJshshir(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Telefon:"
            placeholder="+998 99 777 77 77"
            multiline
            className={classes.input}
            variant="outlined"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
          />
        </Grid>
        <Grid
          style={{
            margin: "10px",
            display: "flex",
          }}
        >
          <Grid item md={9}>
            <spam style={{ fontSize: "22px" }}>Faolligi:</spam>
            <Switch
              style={{ display: "flex" }}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
              value={activ}
              onChange={(e) => setActiv(e.target.checked)}
              defaultChecked="true"
            />
          </Grid>
          <Button
            style={{
              display: "flex",
              marginLeft: "20px",
              float: "end",
            }}
            variant="contained"
            color="primary"
            disableElevation
            onClick={addPerson}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCustomer;
