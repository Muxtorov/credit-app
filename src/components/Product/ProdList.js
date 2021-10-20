import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProdCRUDList from "./ProdCRUDList";
import apiUrl from "../../config/httpConnect";
import axios from "axios";
import { useDispatch } from "react-redux";

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

const ProdList = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [prod, setProd] = useState([]);
  const [prodData, setProdData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(apiUrl.url + "/products").then((res) => {
      setProd(res.data);
      setProdData(res.data);
    });
  }, [setProd]);

  const search_data = (value) => {
    const newData = prod.filter((v) => {
      let b;
      if (v.title.indexOf(value) > -1) {
        b = v;
      }
      return b;
    });

    setProdData(newData);
  };

  const handleEdit = (id) => {
    // dispatch(setProdId(id));
    window.localStorage.setItem("prodId", `${id}`);
  };

  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <form className={classes.root} noValidate>
            <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Maxsulot Nomini Kiriting"
              className={classes.textField}
              fullWidth
              type="text"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
            to={"/addproduct"}
          >
            Qushish
          </Button>
        </Grid>
        <Grid style={{ marginLeft: "-60px" }} item md={12}>
          <h2>Maxsulotlar</h2>

          <ProdCRUDList prod={prodData} handleEdit={handleEdit} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProdList;
