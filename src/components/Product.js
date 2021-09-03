import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 500,

    marginTop: "20px",
  },
});

const Product = () => {
  const classes = useStyles();
  // const stateData = useSelector(stateData);
  const dispatch = useDispatch();

  const [count, setCount] = React.useState(1);

  const data = {
    productId: 101,
    categoryId: "001",
    productName: "Artel TV 32",
    price: 1500000,
    quantity: 3,
    description: "smart hd 32dyuym",
  };

  function HandleClick(data, count) {
    let orData = {
      productId: data.productId,
      productName: data.productName,
      price: data.price,
      quantity: count,
    };
    dispatch({ type: "ADD_PRODUCT", payload: { orData } });
    setCount(1);
  }

  return (
    <div>
      <Grid container justifyContent="center">
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Rasm"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.productName}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Narxi: {data.price}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ margin: "15px" }}
            >
              {data.description}
            </Typography>
            <Button
              color="primary"
              aria-label="reduce"
              size="small"
              variant="outlined"
              onClick={() => {
                setCount(Math.max(count - 1, 1));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            {/* <TextField id="outlined-basic" size="small" value={count} /> */}
            <Button size="medium" color="primary" aria-label="increase">
              {count}
            </Button>
            <Button
              color="primary"
              aria-label="increase"
              variant="outlined"
              size="small"
              onClick={() => {
                if (count < data.quantity) {
                  setCount(count + 1);
                }
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </CardContent>

          <CardActions style={{ justifyContent: "center", marginTop: "15px" }}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {
                HandleClick(data, count);
              }}
            >
              <h3> Add to cart</h3>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default Product;
