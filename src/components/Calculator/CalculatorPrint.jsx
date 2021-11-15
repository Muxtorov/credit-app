import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  List,
  ListItemText,
  Modal,
  Typography,
} from "@material-ui/core";
import apiUrl from "../../config/httpConnect";
import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../image_2021-09-20_10-17-21.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%,   -50%)`,
    position: "absolute",
    width: 800,
    height: 600,
    backgroundColor: "#7EADF3",
    color: "#fff",
    padding: "30px",
  },
  root: {
    minWidth: "200px",
    height: "250px",
    margin: "10px",
  },
}));

const CalculatorPrint = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mahsulot, setMahsulot] = useState([]);
  const [category, setCategory] = useState(undefined);
  const [menuItems, setMenuItems] = useState([]);
  const [paperItems, setpaperItems] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const quanPaperArr = [];
  const quanPaper = props.quanPapers;
  for (let i = 0; i < quanPaper; i++) {
    quanPaperArr.push("1");
  }

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

  function paperBox() {
    switch (quanPaper) {
      case 2:
        return {
          fontSize: "17px",
          width: "98%",
          height: "48%",
          margin: "1%",
          display: "flex",
          justifyContent: "center",
        };
      case 4:
        return {
          fontSize: "13px",
          width: "48%",
          height: "48%",
          margin: "1%",
          display: "flex",
          justifyContent: "center",
        };
      case 6:
        return {
          fontSize: "10px",
          width: "48%",
          height: "31%",
          margin: "1%",
          display: "flex",
          justifyContent: "center",
        };
      case 8:
        return {
          fontSize: "6px",
          width: "48%",
          height: "24%",
          margin: "1%",
          display: "flex",
          jus: "center",
        };
      default:
        break;
    }
  }

  function checkPrice(prod, data) {
    let summa = ((prod.price + (prod.price * data[0]) / 100) / 12).toFixed(0);

    return summa;
  }

  function checkDate(date) {
    switch (date[0]) {
      case "oy0":
        return "Naqd";
      case "oy3":
        return "3  oy";
      case "oy6":
        return "6  oy";
      case "oy9":
        return "9  oy";
      case "oy12":
        return "12  oy";
      default:
        break;
    }
  }

  const BoxPrint = (item) => {
    return (
      <>
        {paperItems[item.item] === 0 ? (
          <div style={paperBox()}>
            <Button onClick={() => setOpen(true)} variant="outlined">
              Maxsulot tanlang
            </Button>
          </div>
        ) : (
          <div style={paperBox()}>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "2px solid #1E64CD",
                padding: "2px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "3px solid #1E64CD",
                  padding: "2px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "2px solid #1E64CD",
                    padding: "2px",
                  }}
                >
                  <img src={logo} style={{ width: "50%" }} alt="rasm" />
                  <h3 style={{ textAlign: "center", margin: "5px 0px" }}>
                    {paperItems[item.item].product.title.toUpperCase()}
                  </h3>

                  {paperItems[item.item].category.percent.map((foiz, index) => (
                    <div key={index + 1}>
                      <h5
                        style={{
                          display: "inline-block",
                          margin: "2px 10px",
                        }}
                      >
                        {checkDate(Object.keys(foiz))}
                      </h5>

                      <h5
                        style={{
                          display: "inline-block",
                          margin: "2px 10px",
                        }}
                      >
                        {checkPrice(paperItems[item.item], Object.values(foiz))}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  function selectItem(item) {
    let foo = paperItems;
    for (let i = 0; i < foo.length; i++) {
      if (foo[i] === 0) {
        foo[i] = item;
        break;
      }
    }
    setpaperItems(foo);
    setOpen(false);
    console.log(paperItems);
  }

  const ModalBox = (
    <div className={classes.paper}>
      <List
        style={{ display: "flex", flexDirection: "row", textAlign: "center" }}
      >
        {menuItems.map((menuItem, index) => {
          return (
            <ListItemText key={index + 1} style={{ marginRight: "20px" }}>
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
                  <CardActionArea onClick={() => selectItem(item)}>
                    <CardMedia
                      component="img"
                      alt="Rasm"
                      height="100"
                      image=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h6">
                        {item.product.title}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h6">
                        Narxi: {item.price}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h6">
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
      <Box style={{ position: "absolute", bottom: "8px", right: "8px" }}>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Bekor qilish
        </Button>
      </Box>
    </div>
  );

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <div
        style={{
          background: "rgb(204,204,204)",
          width: "8.4cm",
          height: "11.88cm",
          display: "flex",
          margin: "0 auto",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {quanPaperArr.map((item, index) => (
          <BoxPrint item={index} />
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {ModalBox}
      </Modal>
    </>
  );
};

export default CalculatorPrint;
