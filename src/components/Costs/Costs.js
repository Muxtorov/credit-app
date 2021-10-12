import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CostsList from "./CostsList";

const Category = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={8}></Grid>
        <Grid item md={2} />
        <Grid item md={1}>
          <Button
            component={Link}
            style={{ display: "flex", marginTop: "20px" }}
            variant="contained"
            color="primary"
            disableElevation
            to={"/addcosts"}
          >
            Qushish
          </Button>
        </Grid>
        <Grid style={{ marginLeft: "-60px" }} item md={12}>
          <h2>Xarajatlar</h2>
          <CostsList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Category;
