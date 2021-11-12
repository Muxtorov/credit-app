import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import CustomAlert from '../CustomAlert';

const useStyles = makeStyles({
  root: {
    minWidth: 500,

    marginTop: '20px',
  },
});

const Product = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  // const stateData = useSelector(stateData);
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const data = location.state.item;

  function HandleClick(data, count) {
    let orData = {
      product: data.product?.id,
      title: data.product?.title,
      price: data.price,
      category: data.category?.id,
      percent: data.category?.percent,
      quantity: count,
    };
    dispatch({ type: 'ADD_PRODUCT', payload: { orData } });
    setCount(1);
  }
  const openAlert = () => {
    setOpen(true);
  };

  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Grid container justifyContent='center'>
        <Card className={classes.root}>
          <CardMedia
            component='img'
            alt='Rasm'
            height='140'
            image='/static/images/cards/contemplative-reptile.jpg'
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {data.title}
            </Typography>
            <Typography gutterBottom variant='h5' component='h2'>
              Narxi: {data.basePrice}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              style={{ margin: '15px' }}
            >
              {data.product?.desc}
            </Typography>
            <Button
              color='primary'
              aria-label='reduce'
              size='small'
              variant='outlined'
              onClick={() => {
                setCount(Math.max(count - 1, 1));
              }}
            >
              <RemoveIcon fontSize='small' />
            </Button>
            {/* <TextField id="outlined-basic" size="small" value={count} /> */}
            <Button size='medium' color='primary' aria-label='increase'>
              {count}
            </Button>
            <Button
              color='primary'
              aria-label='increase'
              variant='outlined'
              size='small'
              onClick={() => {
                if (count < data.quantity) {
                  setCount(count + 1);
                }
              }}
            >
              <AddIcon fontSize='small' />
            </Button>
          </CardContent>

          <CardActions style={{ justifyContent: 'center', marginTop: '15px' }}>
            <Button
              size='small'
              color='primary'
              variant='contained'
              onClick={() => {
                HandleClick(data, count);
                openAlert();
              }}
            >
              <h3> Add to cart</h3>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <CustomAlert
        open={open}
        message='Mahsulot qoshildi'
        handleClose={closeAlert}
      />
    </div>
  );
};

export default Product;
