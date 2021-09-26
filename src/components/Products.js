import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import apiUrl from "../config/httpConnect";

const useStyles = makeStyles({
  root: {
    minWidth: "500px",
    margin: "10px",
  },
});

const Products = (props) => {
  const [mahsulot, setMahsulot] = useState([]);
  let history = useHistory();

  let CatId = window.localStorage.getItem(`${props.locId}`);

  useEffect(() => {
    axios
      .get(apiUrl.url + `/stockorders/category/${CatId}`)
      .then((res) => {
        setMahsulot(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [CatId, props.page, setMahsulot]);

  const handleClick = (item) => {
    console.log("foo");
    console.log(item);
    history.push({ pathname: "/product", state: { item } });
  };

  const classes = useStyles();
  return (
    <Grid container>
      {mahsulot.map((item) => {
        return (
          <div
            style={{ width: "44%", margin: "10px 10px 10px 50px" }}
            key={item.id}
          >
            <Grid item md={6} lg={6} container justifyContent="center">
              <Card className={classes.root}>
                <CardActionArea onClick={() => handleClick(item)}>
                  <CardMedia
                    component="img"
                    alt="Rasm"
                    height="300"
                    image="https://www.digger.ru/storage/app/media/news/2021/7/1/gsmarena-001-1.jpeg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.product.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Narxi: {item.price}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Soni: {item.quantity}
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

export default Products;
