import React, { useEffect, useState, useContext } from 'react'
import { MediaCard } from '../../components/CardChekout'
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { styles, Box } from './style'
import ConsecutiveSnackbars from "../checkout/button"
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Context } from '../../router/Router'
import SnackBar from '../../components/snackBar';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

// const total (res){
// res.map(r=>totalPrice+=r.price)

// }

function Checkout() {
  const consumer = useContext(Context)

  const classes = styles();
  const style = useStyles()



  useEffect(() => {
    console.log('chekout', consumer?.checkout?.length)
    let totalPrice = 0
    privateFetchData("/api/user/checkout")
      .then(res => {
        // consumer.setLenght(res.length)
        consumer.setCheckout(res)
        consumer.setDeleted(false)//*
      })
      .then(() => {
        consumer.checkout.map(r => totalPrice += r.price)
        consumer.setTotal(totalPrice)
        // setLenght(checkout.lenght) 

      }

      )
      .catch(err => console.log(err))
    console.log("++++++", consumer.total)
    console.log("uzunluk", consumer.length)

  }
    , [consumer.deleted]) //*

  const privateFetchData = async (path) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${path}`, {
      headers: {
        token,
      },
    });
    return response?.data;
  };

  console.log(">>>>", consumer.checkout)



  return (

    <Container maxWidth={'xl'}>
      <SnackBar />
      <Grid container spacing={6} className={classes.wrapper} >
        <Typography variant="h3" >
          Checkout List Total: {consumer.total}$
         </Typography>

        {

          consumer.checkout ? consumer.checkout.map((products, index) => {

            //key={products.id} aynı ürün silinme problemi //Aynı üründen kaç adet old. göster.
            return (
              <Grid item xs={12} key={index}>


                <MediaCard
                  productId={products._id}
                  productPrice={products.price}
                  productImage={products.image}
                  productTitle={products.title}
                  productDescription={products.description}
                  productCategory={products.category}
                  setDeleted={consumer.setDeleted}
                />
              </Grid>
            )
          }) :

            <LinearProgress style={{ marginTop: 20 }} />

        }
      </Grid>

    </Container>
  )
}

export default Checkout

