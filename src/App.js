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
import Logo from "./components/Logo.js";
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
                <Logo />
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
