import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import axios from "axios";
import apiUrl from "../config/httpConnect";

const useStyles = makeStyles({
  root: {
    minWidth: "500px",
    margin: "10px",
  },
});

const Product = () => {
  const [mahsulot, setMahsulot] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl.url + "/products")
      .then((res) => {
        setMahsulot(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setMahsulot]);

  const classes = useStyles();
  return (
    <Grid container>
      {mahsulot.map((item) => {
        return (
          <div style={{ margin: 20 }}>
            <Grid item md={6} lg={6} container justifyContent="center">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Rasm"
                    height="300"
                    image="https://www.digger.ru/storage/app/media/news/2021/7/1/gsmarena-001-1.jpeg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Narxi: {item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ margin: "15px" }}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
};

export default Product;
