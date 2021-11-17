import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import apiUrl from "../../config/httpConnect";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { clearProdId } from "../../store/actions";
import Loading from "../Loading";

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

const AddProduct = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [categoriyasi, setCategoriyasi] = useState("");
  const [nomi, setNomi] = useState("");
  const [izoh, setIzoh] = useState("");
  const [id, setId] = useState();
  const [arr, setArr] = useState([]);
  const { prodID } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let categ = window.localStorage.getItem("categoriyalar");
    setArr(JSON.parse(categ));

    if (prodID) {
      setLoading(true);
      axios
        .get(apiUrl.url + "/products/" + prodID)
        .then((res) => {
          let prod = res.data;
          setNomi(prod.title);
          setCategoriyasi(prod.category?.id);
          setIzoh(prod.desc);
          setId(prod.id);
        })

        .finally(() => setLoading(false));
      return () => dispatch(clearProdId());
    }
  }, [dispatch, prodID]);

  const addPerson = async () => {
    let newprod = {
      category: `${categoriyasi}`,
      title: `${nomi}`,
      desc: `${izoh}`,
    };

    if (id !== undefined) {
      setLoading(true);
      await axios
        .put(apiUrl.url + "/products/" + id, newprod)
        .then((res) => {
          window.history.back();
        })
        .finally(() => setLoading(false))
        .catch((err) => {
          console.log("error Edit....", err);
        });
    } else {
      setLoading(true);
      await axios
        .post(apiUrl.url + "/products", newprod)
        .then((res) => {
          window.history.back();
        })
        .finally(() => setLoading(true))
        .catch((err) => {
          console.log("error....", err);
        });
    }
  };

  const handleChange = (event) => {
    setCategoriyasi(event.target.value);
  };

  if (loading) return <Loading />;
  return (
    <div>
      <Grid item md={12}>
        <div style={{ textAlign: "center", display: "flex" }}>
          {prodID ? (
            <h2> Productni Uzgartirish </h2>
          ) : (
            <h2>YANGI PRODUCT QUSHISH</h2>
          )}
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
            label="Descreption:"
            placeholder="Izoh"
            multiline
            className={classes.input}
            variant="outlined"
            value={izoh}
            onChange={(e) => setIzoh(e.target.value)}
          />
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categoriyasi}
                onChange={handleChange}
              >
                {arr.map((item, ind) => {
                  return (
                    <MenuItem key={ind + 1} value={item.id}>
                      {item.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </Grid>

        <Grid
          style={{
            margin: "10px",
            display: "flex",
          }}
        >
          <Grid item md={6}></Grid>
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
            onClick={addPerson}
          >
            Saqlash
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProduct;
