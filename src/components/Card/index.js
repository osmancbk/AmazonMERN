import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styles, Price, } from './Card.style.js'
// import { FullscreenExit } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import { Context } from '../../router/Router';
import { useHistory } from "react-router-dom";
// import { postData } from '../../helper/postData'


export function MediaCard({ productImage, productTitle, productPrice, productCategory, productId }) {
  // Button'a onClik with history


  const consumer = useContext(Context);
  let history = useHistory();
  const classes = styles();


  // const AddProduct = () => {
  //   postData(`/api/user/addProduct/${productId}`)
  //     .then(() => {

  //       consumer.setAdded(true)
  //     }
  //     )


  // }


  return (
    <Card className={classes.root}>

      <CardActionArea >
        <CardContent className={classes.inCard}>
          <Typography variant="body2" color="textSecondary" component="p">
            {productTitle}
          </Typography>
        </CardContent>

        <CardMedia
          className={classes.media}
          component="img"
          // height="140"
          image={productImage}//*
        />

      </CardActionArea>


      <CardActions className={classes.actions}>

        <Typography variant="h6" color="textSecondary" component="h6" className={classes.price}>
          {`${productPrice} $`}
        </Typography>

        <Grid container direction='row' justify='space-between' >
          <Button className={classes.button}
            onClick={() => consumer.addToBasket(productId)}

            size="small"
            type="Submit"
            variant="contained" >
            Add to Basket
         </Button>
          <Button className={classes.button}
            size="small"
            type="Submit"
            variant="contained"
            onClick={
              () => {
                consumer.setCurrentProductId(productId)
                history.push('/details')
              }
            }

          >
            See more ...
        </Button>
        </Grid>
      </CardActions>


    </Card>
  );
}

  // category: "men clothing"
  // description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  // id: 1
  // image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // price: 109.95
  // title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  // _id: "5fdd3fdac69db03ea0824a3d"
