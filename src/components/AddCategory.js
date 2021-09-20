import { Button, Grid, TextField } from "@material-ui/core";
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

const AddCategory = (props) => {
  const classes = useStyles();

  const [nomi, setNomi] = useState("");
  const [oy0, setOy0] = useState("");
  const [oy3, setOy3] = useState("");
  const [oy6, setOy6] = useState("");
  const [oy9, setOy9] = useState("");
  const [oy12, setOy12] = useState("");
  const [id, setId] = useState("");

  let cateId = window.localStorage.getItem("categId");

  if (cateId !== null) {
    axios.get(apiUrl.url + "/categorys/" + cateId).then((res) => {
      let bar = res.data;
      setNomi(bar.title);
      setOy0(bar.percent[0].oy0);
      setOy3(bar.percent[1].oy3);
      setOy6(bar.percent[2].oy6);
      setOy9(bar.percent[3].oy9);
      setOy12(bar.percent[4].oy12);
      setId(bar.id);
    });

    window.localStorage.removeItem("categId");
  }

  const addCategory = async () => {
    let CATEGORIYA = {
      title: `${nomi}`,
      percent: [
        {
          oy0: oy0 * 1,
        },
        {
          oy3: oy3 * 1,
        },
        {
          oy6: oy6 * 1,
        },
        {
          oy9: oy9 * 1,
        },
        {
          oy12: oy12 * 1,
        },
      ],
    };

    if (id !== undefined) {
      await axios
        .put(apiUrl.url + "/categorys/" + id, CATEGORIYA)
        .then((res) => {
          window.history.back();
        })
        .catch((err) => {});
    } else {
      await axios
        .post(apiUrl.url + "/categorys", CATEGORIYA)
        .then((res) => {
          window.history.back();
          window.location.assign("http://localhost:3000/setcategory");
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
          <h2>YANGI CATEGORIYA QUSHISH</h2>
        </div>
        <Grid>
          <TextField
            id="outlined-textarea"
            label="Nomi:"
            placeholder="Velosiped"
            multiline
            className={classes.input}
            variant="outlined"
            value={nomi}
            onChange={(e) => {
              setNomi(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="0 oyga:"
            placeholder="Foizini kiriting"
            multiline
            className={classes.input}
            variant="outlined"
            value={oy0}
            onChange={(e) => {
              setOy0(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="3 oyga:"
            placeholder="Foizini kiriting"
            multiline
            className={classes.input}
            variant="outlined"
            value={oy3}
            onChange={(e) => {
              setOy3(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="6 oyga:"
            placeholder="Foizini kiriting"
            multiline
            className={classes.input}
            variant="outlined"
            value={oy6}
            onChange={(e) => {
              setOy6(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="9 oyga:"
            placeholder="Foizini kiriting"
            multiline
            className={classes.input}
            variant="outlined"
            value={oy9}
            onChange={(e) => {
              setOy9(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="12 oyga:"
            placeholder="Foizini kiriting"
            multiline
            className={classes.input}
            variant="outlined"
            value={oy12}
            onChange={(e) => {
              setOy12(e.target.value);
            }}
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
            onClick={addCategory}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCategory;
