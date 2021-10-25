import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  List,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import apiUrl from "../../config/httpConnect";

const useStyles = makeStyles({
  root: {
    minWidth: "400px",
    margin: "10px",
  },
});

const Calculator = () => {
  const [mahsulot, setMahsulot] = useState([]);
  const [category, setCategory] = useState(undefined);
  const [menuItems, setMenuItems] = useState([]);

  let history = useHistory();

  useEffect(() => {
    axios
      .get(apiUrl.url + "/categorys")
      .then((res) => {
        setMenuItems(res.data);
        setCategory(res.data[0]);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    if (category) {
      axios
        .get(apiUrl.url + `/stockorders/category/${category.id}`)
        .then((res) => {
          if (res.status === 200) {
            setMahsulot(res.data);
            console.log("yuklandi");
          } else {
            console.log("yuklanmadi");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [category]);

  const handleClickPrint = (item) => {
    history.push({ pathname: "/calcprint", state: { item } });
  };

  const classes = useStyles();

  return (
    <>
      <List
        style={{ display: "flex", flexDirection: "row", textAlign: "center" }}
      >
        {menuItems.map((menuItem, index) => {
          return (
            <ListItemText key={index} style={{ marginRight: "20px" }}>
              <Checkbox
                checked={category?.id === menuItem.id}
                onChange={() => setCategory(menuItem)}
                inputProps={{
                  "aria-label": "blue checkbox",
                }}
                color="primary"
                size="medium"
              />
              <ListItemText
                style={{
                  marginLeft: "15px",
                  display: "inline-block",
                }}
              >
                {menuItem.title.toUpperCase()}
              </ListItemText>
            </ListItemText>
          );
        })}
        <ListItemText style={{ marginRight: "20px" }}>
          <Button
            onClick={() => {
              handleClickPrint();
            }}
          >
            <ListItemText
              style={{
                marginLeft: "15px",
                display: "inline-block",
                border: "5 solid blue",
              }}
            >
              Chop etish
            </ListItemText>
          </Button>
        </ListItemText>
      </List>

      <Grid container>
        {mahsulot.map((item) => {
          return (
            <div
              style={{ width: "44%", margin: "10px 10px 10px 50px" }}
              key={item.id}
            >
              <Grid item md={6} lg={6} container justifyContent="center">
                <Card className={classes.root}>
                  <CardActionArea onClick={() => handleClickPrint(item)}>
                    <CardMedia
                      component="img"
                      alt="Rasm"
                      height="300"
                      image=""
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
    </>
  );
};

export default Calculator;
