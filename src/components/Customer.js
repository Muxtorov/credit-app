import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomerList from "./CustomerList";

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

  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <form className={classes.root} noValidate>
            <TextField
              id="standard-full-width"
              label="JSHSHIR"
              style={{ margin: 8 }}
              placeholder="JSHSHIRni 14 talik kiriting"
              className={classes.textField}
              fullWidth
              type="number"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Grid item md={2}>
          <Button
            style={{ display: "flex", marginTop: "20px" }}
            variant="contained"
            color="primary"
            disableElevation
          >
            Search
          </Button>
        </Grid>
        <Grid item md={1}>
          <Button
            component={Link}
            style={{ display: "flex", marginTop: "20px" }}
            variant="contained"
            color="primary"
            disableElevation
            to={"/addcustomer"}
            onClick={() => {
              window.localStorage.removeItem("customId");
            }}
          >
            Add
          </Button>
        </Grid>
        <Grid style={{ marginLeft: "-60px" }} item md={12}>
          <CustomerList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Customer;
