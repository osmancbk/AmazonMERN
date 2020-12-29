import React, { useEffect, useContext, useState, useRef } from 'react'
import { Grid, Container, Button } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { style, Image, Link, DetailHeader, DetailP, DetailRed, CancelledPrice } from './details.style';
import { fetchData } from '../../helper/FetchData';
import { styles } from '../register/Register.style';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from '@material-ui/core/Typography';
import DetailsTable from '../../components/table';
import TableHeader from '../../components/tableHeader';
import ShopIcon from '@material-ui/icons/Shop';
import { Context } from '../../router/Router';
import SnackBar from '../../components/snackBar';


function Details() {
    const consumer = useContext(Context);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const ctx = canvasRef?.current?.getContext("2d");

    const getCanvas = (x, y) => {
        ctx?.drawImage(imageRef?.current, x-55, y-120, 300, 400, 0, 0, 500, 600);
    }
    const canvasClean = () => {
        canvasRef.current.style.display = "inline";
        ctx?.clearRect(0, 0, 700, 800);
    }

    useEffect(() => {
        window.scrollTo(0,0)
        canvasRef.current.style.display = 'none'
        consumer.getDetails(consumer.currentProductId)
        console.log('consumer.currentProductId', consumer.currentProductId)

        fetchData("/api/product/homepage")
            .then(res => {
                consumer.setsimilarProductsData(res.data?.products);
                console.log('>>>>', res.data?.products)
            })


    }, [consumer.currentProductId])

    const signupStyles = styles();
    const detailStyles = style();
    return (
        <Container className={detailStyles.container} >
            <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                    <Image
                        onMouseOver={() => canvasClean()}
                        onMouseLeave={() => canvasRef.current.style.display = 'none'}
                        onMouseMove={(e) => getCanvas(e.clientX, e.clientY)}
                        ref={imageRef} src={consumer?.productData?.image}
                    />
                    {/* <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></Image> */}
                </Grid>
                <canvas ref={canvasRef} className={detailStyles.canvas} width="500" height="600" />
                <Grid className={detailStyles.containerAboutItem} xs={12} md={4}>
                    <h3>{consumer?.productData?.title}</h3>
                    <Rating name="read-only" value="4" readOnly />
                    <Link href="#">17,065 ratings</Link> | <Link href="#"> 1000+ answered questions</Link>
                    <Grid container direction="row" >
                        <Grid>
                            <DetailHeader>Suggested price:</DetailHeader>
                            <DetailHeader style={{ height: "3.2rem" }}>Top Deal:</DetailHeader>
                            <DetailHeader>You Save:</DetailHeader>
                        </Grid>
                        <Grid>
                            <CancelledPrice>${Math.round((consumer?.productData?.price * 1.3) * 100) / 100}</CancelledPrice>
                            <DetailP><Typography variant="h6" style={{ color: "#C45500" }}><b> $ {consumer?.productData?.price}</b></Typography>
                             FREE Delivery.<Link href="#">Details</Link> </DetailP>
                            <DetailP>${Math.round((consumer?.productData?.price * .3) * 100) / 100}</DetailP>
                        </Grid>
                    </Grid>
                    <h4>About this item</h4>
                    <DetailP>{consumer?.productData?.description}</DetailP>
                </Grid>
                <Grid className={detailStyles.checkoutWrapper} xs={12} md={3}>


                    {/* <CanvasGradient></CanvasGradient>
                    <CanvasPattern></CanvasPattern>
                    <CanvasRenderingContext2D></CanvasRenderingContext2D>
                    <OffscreenCanvas></OffscreenCanvas>
                    <OffscreenCanvasRenderingContext2D></OffscreenCanvasRenderingContext2D> */}

                    <Typography variant="h6" align="left" style={{ color: "#C45500", marginLeft: "1rem" }}><b>${consumer?.productData?.price}</b></Typography>
                    <DetailP><b>FREE Delivery.</b><Link href="#"> Delivery Details</Link></DetailP>
                    <DetailP>Arrives: Tuesday,<b>Dec 29</b> <Link href="#"> Details</Link></DetailP>
                    <DetailP>Fastest delivery: Thursday,<b> Dec 31</b><Link href="#"> Details</Link></DetailP>
                    <Grid className={detailStyles.buttonsGrid}>
                        <SnackBar />
                        <Button className={signupStyles.button}
                            type="Submit"
                            variant="contained"
                            size="small"
                            fullWidth
                            onClick={() => consumer.addToBasket(consumer?.productData?._id)}
                        >
                            <ShoppingCartOutlinedIcon className={detailStyles.shopIcon} />
                            Add to Basket
                        </Button>
                        <Button className={detailStyles.buttonBuyNow}
                            type="Submit"
                            variant="contained"
                            size="small"
                            fullWidth>
                            <ShopIcon className={detailStyles.shopIcon} />
                            Buy Now
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className={detailStyles.similarItems} container >
                <Typography variant="h5" style={{ color: "#C45500", marginTop: "3rem" }}>Most Popular Products</Typography>
                <Grid className={detailStyles.similarItems} container direction="row" >
                    <Grid item className={detailStyles.card} xs={12} md={4}>
                        <Grid container direction="row">
                            <Grid xs={6} md={6}>
                                <TableHeader />
                            </Grid>
                            <Grid xs={6} md={6}>
                                <DetailsTable
                                    similarProductsData={consumer.similarProductsData}
                                    productNumber="5"
                                    r1="4.5"
                                    r2={consumer?.similarProductsData[5]?.price}
                                    r3a="FREE Delivery." r3b="Delivery Details"
                                    r4="Amazon.de"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={detailStyles.card} xs={6} md={2}>
                        <DetailsTable
                            similarProductsData={consumer.similarProductsData}
                            productNumber="1"
                            r1="4"
                            r2={consumer.similarProductsData[1]?.price}
                            r3a="FREE Delivery." r3b="Delivery Details"
                            r4="Amazon.de"
                        />
                    </Grid>
                    <Grid item className={detailStyles.card} xs={6} md={2}>
                        <DetailsTable
                            similarProductsData={consumer.similarProductsData}
                            productNumber="2"
                            r1="4.5"
                            r2={consumer?.similarProductsData[2]?.price}
                            r3a="FREE Delivery." r3b="Delivery Details"
                            r4="Amazon.de"
                        />
                    </Grid>
                    <Grid className={detailStyles.card} xs={6} md={2}>
                        <DetailsTable
                            similarProductsData={consumer.similarProductsData}
                            productNumber="3"
                            r1="4"
                            r2={consumer.similarProductsData[3]?.price}
                            r3a="FREE Delivery." r3b="Delivery Details"
                            r4="Amazon.de"
                        />
                    </Grid>
                    <Grid item className={detailStyles.card} xs={6} md={2}>
                        <DetailsTable
                            similarProductsData={consumer?.similarProductsData}
                            productNumber="6"
                            r1="5"
                            r2={consumer?.similarProductsData[6]?.price}
                            r3a="FREE Delivery." r3b="Delivery Details"
                            r4="Amazon.de"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Details;
