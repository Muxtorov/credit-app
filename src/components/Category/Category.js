import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../config/httpConnect";
import CategoryList from "./CategoryList";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = () => {
  const handleDel = (id) => {
    axios
      .delete(apiUrl.url + "/categorys/" + id)
      .then((res) => {
        if (res.status === 200) {
          toast.success("kategoriya o'chirildi");
        } else {
          toast.error("kategoriya o'chirilmadi");
        }
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    window.localStorage.setItem("categId", `${id}`);
  };

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
            to={"/addcategory"}
          >
            Qushish
          </Button>
        </Grid>
        <Grid style={{ marginLeft: "-60px" }} item md={12}>
          <h2>Kategoriyalar</h2>
          <CategoryList handleDel={handleDel} handleEdit={handleEdit} />
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Category;
