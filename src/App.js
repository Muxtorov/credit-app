import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Products from "./components/Product/Products";
import Customer from "./components/Customer/Customer";
import AddCustomer from "./components/Customer/AddCustomer";
import ProdCRUD from "./components/Product/ProdList";
import AddProd from "./components/Product/AddProd";
import AddIncoming from "./components/AddIncoming";
import Category from "./components/Category/Category";
import AddCategory from "./components/Category/AddCategory";
import axios from "axios";
import apiUrl from "./config/httpConnect";
import Contract from "./components/Contract";
import Home from "./components/Home.js";
import Product from "./components/Product/Product";
import Cart from "./components/Cart";
import Tkun from "./components/Tkun.js";
import Qarzlar from "./components/Qarzlar";
import Costs from "./components/Costs/Costs";
import AddCosts from "./components/Costs/AddCosts";
import Calculator from "./components/Calculator/Calculator";
import CalculatorPrint from "./components/Calculator/CalculatorPrint";

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
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
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
              <Route exact path="/calc">
                <Calculator />
              </Route>
              <Route path="/calcprint">
                <CalculatorPrint />
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
