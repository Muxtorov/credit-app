import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../config/httpConnect';
import CategoryList from './CategoryList';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading';


const Category = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(apiUrl.url + '/categorys')
      .then((res) => {
        if (res.status === 200) {
          toast.success('kategoriyalar yuklandi');
          console.log('000000000');
        } else {
          toast.error('kategoriya yuklanmadi');
        }
        setData(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDel = (id) => {
    setLoading(true);
    axios
      .delete(apiUrl.url + '/categorys/' + id)
      .then((res) => {
        window.location.reload();
      })
      .finally(() => setLoading(true))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    window.localStorage.setItem('categId', `${id}`);
  };
  if (loading) return <Loading />;
  return (
    <div>
      <Grid container>
        <Grid item md={8}></Grid>
        <Grid item md={2} />
        <Grid item md={1}>
          <Button
            component={Link}
            style={{ display: 'flex', marginTop: '20px' }}
            variant='contained'
            color='primary'
            disableElevation
            to={'/addcategory'}
          >
            Qushish
          </Button>
        </Grid>
        <Grid style={{ marginLeft: '-60px' }} item md={12}>
          <h2>Kategoriyalar</h2>
          <CategoryList
            data={data}
            handleDel={handleDel}
            handleEdit={handleEdit}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Category;
