import React, { useContext } from 'react'
import { Context } from '../../router/Router'
import { MediaCard } from '../../components/Card'; //*
import { Container, Grid, Typography } from '@material-ui/core';
import { styles, Box } from './CardList.style'
import SnackBar from '../../components/snackBar';
import { red } from '@material-ui/core/colors';
// import LinearProgress from '@material-ui/core/LinearProgress'; //*

export function CardList() {
    const classes = styles();
    const { productList } = useContext(Context)

    return (
        <Container className={classes.root} maxWidth={'xl'}>
            <SnackBar />
            <Grid container className={classes.grid}>
                <Grid item xs={12} >
                    <Box> İndirimden yararlanmak için kupon kısmına <span style={{color: 'red' }}>"CODE47"</span> yazınız...</Box>
                </Grid>
            </Grid>


            <Grid container spacing={6}>

                {productList?.map((products) => {
                    return (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={products.id}>
                            <MediaCard
                                productPrice={products.price}
                                productId={products._id}
                                productImage={products.image}
                                productTitle={products.title}
                                productDescription={products.description}
                                productCategory={products.category}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}


// category: "men clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// _id: "5fdd3fdac69db03ea0824a3d"