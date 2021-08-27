import React from "react";
import Menu from "./components/Menu";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Product from "./components/MaishiyProduct";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Router>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={3}>
              <Menu />
            </Grid>
            <Grid item md={9} style={{ marginTop: "80px", textAlign: "start" }}>
              <Route path="/maishiy">
                <Product />
              </Route>
              <Route path="/mebel">
                <h1>Mebel</h1>
              </Route>
            </Grid>
          </Grid>
        </Router>
      </Switch>
    </div>
  );
};
export default App;
