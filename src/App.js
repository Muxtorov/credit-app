import React from "react";
import Menu from "./components/Menu";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Products from "./components/Products";
// import CustomerList from "./components/CustomerList";
import Customer from "./components/Customer";
import AddCustomer from "./components/AddCustomer";

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
              <Route path="/setcustomer">
                {/* <CustomerList /> */}
                <Customer />
              </Route>
              {/* <Route path="/setproduct"></Route> */}
              <Route path="/addcustomer">
                <AddCustomer />
              </Route>
              <Route path="/maishiy">
                <Products page="/products" locId="maishiy" />
              </Route>
              <Route path="/mebel">
                <Products page="/products" locId="mebel" />
              </Route>
            </Grid>
          </Grid>
        </Router>
      </Switch>
    </div>
  );
};
export default App;
