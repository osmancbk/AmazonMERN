import React,{useState,useEffect,useContext} from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import {privateFetchData} from "../../helper/FetchData";
import { Context } from '../../router/Router';
import { useHistory } from "react-router-dom";
import axios from "axios"



export function MediaCard({ productId,productImage, productTitle, productPrice, productDescription,setDeleted }) {
  const consumer = useContext(Context);
  let history = useHistory();

  // Button'a onClik with history
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  // const handleClick = (message) => () => {
  //   setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };
  const postData = async (path, data) => {
    const token = localStorage.getItem("token");
    console.log("data Post", data);
    const response = await axios.post(`${path}`, data, {
      headers: {
        token,
      },
    });
    return response;
  };
  const deleteProduct = () =>{
            postData(`/api/user/deleteProduct/${productId}`)
                  .then(()=>
                   { consumer.setsnackBarMessage("Product Deleted"); //*
                   consumer.snackBarHandleClick()
                    setDeleted(true)}
     )
    
                  
  }

  const getDetails =  () => {
    consumer.setCurrentProductId(productId)
    history.push('/details')
  }

  const classes = styles();
  return (
    <Card className={classes.root}>

      <CardActionArea >
        <CardContent className={classes.inCard}>
          <Typography variant="body2" color="textPrimary" component="p">
            {productTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          component="img"
          // height="140"
          image={productImage}//*
        />
      <CardContent className={classes.inCard}>
          <Typography variant="body2" color="textSecondary" component="p">
            {productDescription}
          </Typography>
        </CardContent>

      </CardActionArea>


      <CardActions className={classes.actions}>
      {/*  */}
        <Typography variant="h6" color="textSecondary" component="h6">
          {`${Math.round((productPrice*100)/100)} $`}
        </Typography>

        <Grid container direction='row' justify='space-between' >
          <Button className={classes.button}
            onClick={deleteProduct}
            
            size="small"
            type="Submit"
            variant="contained" >
            Delete 
         </Button>
          <Button className={classes.button}
            onClick={getDetails}

            size="small"
            type="Submit"
            variant="contained" >
            Details
        </Button>
        </Grid>
      </CardActions>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />


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
