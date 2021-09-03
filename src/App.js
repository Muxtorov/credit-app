import React from "react";
import Menu from "./components/Menu";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Products from "./components/Products";
// import CustomerList from "./components/CustomerList";
import Customer from "./components/Customer";
import AddCustomer from "./components/AddCustomer";
import ProdCRUD from "./components/ProdCRUD";
import Product from "./components/Product";
import Cart from "./components/Cart";

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
                <Customer />
              </Route>
              <Route path="/setproduct">
                <ProdCRUD />
              </Route>
              <Route path="/addcustomer">
                <AddCustomer />
              </Route>
              <Route path="/maishiy">
                <Products locId="maishiy" />
              </Route>
              <Route path="/mebel">
                <Products locId="mebel" />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Grid>
          </Grid>
        </Router>
      </Switch>
    </div>
  );
};
export default App;
