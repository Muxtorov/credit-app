import { Button, Grid, Switch, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const AddCustomer = () => {
  const classes = useStyles();

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
          />
          <TextField
            id="outlined-textarea"
            label="Familiya:"
            placeholder="Doe"
            multiline
            className={classes.input}
            variant="outlined"
          />
          <TextField
            id="outlined-textarea"
            label="Sharifi:"
            placeholder="John"
            multiline
            className={classes.input}
            variant="outlined"
          />
          <TextField
            id="outlined-textarea"
            label="Passport Seriyasi"
            placeholder="AA0000000"
            multiline
            className={classes.input}
            variant="outlined"
          />
          <TextField
            id="outlined-textarea"
            label="JSHSHIR:"
            placeholder="12345678901234"
            multiline
            className={classes.input}
            variant="outlined"
          />
          <TextField
            id="outlined-textarea"
            label="Telefon:"
            placeholder="+998 99 777 77 77"
            multiline
            className={classes.input}
            variant="outlined"
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
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCustomer;
