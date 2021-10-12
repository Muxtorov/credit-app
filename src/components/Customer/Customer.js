import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomerList from "./CustomerList";
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
    width: "74%",
    margin: "10px",
  },
}));

const Customer = () => {
  const classes = useStyles();

  const [jshr, setJshr] = useState("");
  const [custom, setCustom] = useState([]);
  const [customData, setCustomData] = useState([]);
  const [liboy, setLiboy] = useState(true);

  useEffect(() => {
    axios.get(apiUrl.url + "/customers").then((res) => {
      setCustom(res.data);
      setCustomData(res.data);
    });
  }, [setCustom, liboy]);

  const search_data = (value) => {
    const newData = custom.filter((v) => {
      let a;
      if (v.jshshir.indexOf(value) > -1) {
        a = v;
      }
      return a;
    });

    setCustomData(newData);
  };

  const handleDel = async (id) => {
    await axios
      .delete(apiUrl.url + "/customers/id/" + id)
      .then((res) => {
        setLiboy(!liboy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    window.localStorage.setItem("customId", `${id}`);
  };

  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <form className={classes.root} noValidate>
            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="JSHSHIRni kiriting"
              className={classes.textField}
              fullWidth
              type="number"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={jshr}
              onChange={(e) => {
                setJshr(e.target.value);
                search_data(e.target.value);
              }}
            />
          </form>
        </Grid>
        <Grid item md={2} />
        <Grid item md={1}>
          <Button
            component={Link}
            style={{ display: "flex", marginTop: "20px" }}
            variant="contained"
            color="primary"
            disableElevation
            to={"/addcustomer"}
          >
            Qushish
          </Button>
        </Grid>
        <Grid style={{ marginLeft: "-60px" }} item md={12}>
          <h2>Xaridorlar</h2>
          <CustomerList
            custom={customData}
            handleDel={handleDel}
            handleEdit={handleEdit}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Customer;
