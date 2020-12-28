import React ,{useEffect,useState} from 'react'
import  {MediaCard}  from '../../components/CardChekout'
import { Button, Container, Grid,Typography } from '@material-ui/core';
import { styles,Box } from './style'
import ConsecutiveSnackbars from "../checkout/button"
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
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
    const classes = styles();
    const style = useStyles()
  
    const [checkout ,setCheckout] = useState()
    const [total,setTotal]=useState()
    const [length,setLenght]=useState()
    const [deleted,setDeleted]=useState()
    
    useEffect(()=>{
        let totalPrice = 0
        privateFetchData("/api/user/checkout")
        .then(res =>  {
            setLenght(res.length)
            setCheckout(res)
            setDeleted(false)
        })
        .then(()=> {
            checkout.map(r=>totalPrice+=r.price) 
            setTotal(totalPrice) 
            // setLenght(checkout.lenght) 
            
            }      
        
        )
        .catch(err => console.log(err))
        console.log("++++++",total)
        console.log("uzunluk",length)
       
    }
    ,[deleted])
   
    const privateFetchData = async (path) => {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${path}`, {
          headers: {
            token,
          },
        });
        return response?.data;
      };

    console.log(">>>>",checkout)
  
   
 
    return (
         
        <Container maxWidth={'xl'}>
            
            <Grid  container  spacing={6} className={classes.wrapper} >
                            <Typography variant="h3" >
                                Checkout List
                            </Typography>
                            <Button variant="contained" color="primary" href="/" style={{marginTop:20}} >
                                Home Page
                            </Button>

              
                            
                {   
                    
                    checkout ? checkout.map((products) => {
                    
                   
                    return (
                        <Grid item  xs={12} key={products.id}>

                            
                            <MediaCard
                                productId={products._id}
                                productPrice={products.price}
                                productImage={products.image}
                                productTitle={products.title}
                                productDescription={products.description}
                                productCategory={products.category}
                                setDeleted={setDeleted}
                            />
                        </Grid>
                    )
                }):
                
                <LinearProgress style={{marginTop:20}} />
                
                }
            </Grid>
           
        </Container>
    )
}

export default Checkout

