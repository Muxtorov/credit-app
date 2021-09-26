import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Products from "./components/Products";
import Customer from "./components/Customer";
import AddCustomer from "./components/AddCustomer";
import ProdCRUD from "./components/ProdList";
import AddProd from "./components/AddProd";
import AddIncoming from "./components/AddIncoming";
import Category from "./components/Category";
import AddCategory from "./components/AddCategory";
import axios from "axios";
import apiUrl from "./config/httpConnect";
import Contract from "./components/Contract";
import Home from "./components/Home.js";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Tkun from "./components/Tkun.js";
import Qarzlar from "./components/Qarzlar";
import Costs from "./components/Costs";
import AddCosts from "./components/AddCosts";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl.url + "/categorys").then((res) => {
      setData(res.data);
    });
  }, [setData]);

  return (
    <div className="container">
      <Switch>
        <Router>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={3}>
              <Menu />
            </Grid>
            <Grid item md={9} style={{ marginTop: "80px", textAlign: "start" }}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/birthday">
                <Tkun />
              </Route>
              <Route exact path="/addcosts">
                <AddCosts />
              </Route>
              <Route exact path="/costs">
                <Costs />
              </Route>
              <Route exact path="/debts">
                <Qarzlar />
              </Route>
              <Route path="/setcustomer">
                <Customer />
              </Route>
              <Route path="/setproduct">
                <ProdCRUD />
              </Route>
              <Route path="/setcategory">
                <Category />
              </Route>
              <Route path="/addcategory">
                <AddCategory />
              </Route>
              <Route path="/addcustomer">
                <AddCustomer />
              </Route>
              <Route path="/addproduct">
                <AddProd />
              </Route>
              <Route path="/addincoming">
                <AddIncoming />
              </Route>
              <Route path="/contract">
                <Contract />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>

              {data.map((item) => {
                return (
                  <Route path={"/" + item.title}>
                    <Products locId={item.title} />
                  </Route>
                );
              })}
            </Grid>
          </Grid>
        </Router>
      </Switch>
    </div>
  );
};
export default App;
