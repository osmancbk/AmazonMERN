import React from 'react';
import { Grid, Container, Box, Hidden } from '@material-ui/core';
import { styles, LinkText, FooterTitle, FooterSubTitle, FooterContainer, Link, Image, Box1, Box2, Box3 } from './Footer.style'
import logo from '../../assets/amazonLg.png'



export default function Footer() {
    const classes = styles();
    //üst alt grid kapatılabilir
    return (
        <Container disableGutters={true} maxWidth={'xl'}  >

            <FooterContainer>
                <Grid item xs={12}>
                    <Link href='#'>
                        <LinkText> Back to top</LinkText>
                    </Link>
                </Grid>
                <Container maxWidth="md">


                    <Grid container spacing={3} direction="row"
                     >

                        <Grid item lg={3} md={4} sm={6} xs={12} >
                            <FooterTitle>Get to Know Us</FooterTitle>
                            <FooterSubTitle>Careers</FooterSubTitle>
                            <FooterSubTitle>Blog</FooterSubTitle>
                            <FooterSubTitle>About Amazon</FooterSubTitle>
                            <FooterSubTitle>Sustainability</FooterSubTitle>
                            <FooterSubTitle>Investor Relations</FooterSubTitle>
                            <FooterSubTitle>Amazon Devices</FooterSubTitle>
                            <FooterSubTitle>Amazon Tours</FooterSubTitle>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} >
                            <FooterTitle>Sell products on Amazon</FooterTitle>
                            <FooterSubTitle> Sell apps on Amazon</FooterSubTitle>
                            <FooterSubTitle>Become an Affiliate</FooterSubTitle>
                            <FooterSubTitle>Advertise Your Products</FooterSubTitle>
                            <FooterSubTitle>Self-Publish with Us</FooterSubTitle>
                            <FooterSubTitle>Host an Amazon Hub</FooterSubTitle>
                            <FooterSubTitle>›See More Make Money with Us</FooterSubTitle>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} >
                            <FooterTitle >Amazon Payment Products</FooterTitle>
                            <FooterSubTitle>Amazon Business Card</FooterSubTitle>
                            <FooterSubTitle>Shop with Points</FooterSubTitle>
                            <FooterSubTitle>Reload Your Balance</FooterSubTitle>
                            <FooterSubTitle>Amazon Currency Converter</FooterSubTitle>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} >
                            <FooterTitle>Let Us Help You</FooterTitle>
                            <FooterSubTitle>Amazon and COVID-19</FooterSubTitle>
                            <FooterSubTitle>Your Account</FooterSubTitle>
                            <FooterSubTitle>Your Orders</FooterSubTitle>
                            <FooterSubTitle>Shipping Rates & Policies</FooterSubTitle>
                            <FooterSubTitle>Returns & Replacements</FooterSubTitle>
                            <FooterSubTitle>Manage Your Content and Devices</FooterSubTitle>
                            <FooterSubTitle>Amazon Assistant</FooterSubTitle>
                            <FooterSubTitle>Help</FooterSubTitle>
                        </Grid>

                    </Grid>
                </Container>


                <Hidden xsDown>
                <Box className={classes.defaultProps} border={1} />


                <Container className={classes.bottomContainer} >

                    <Grid container spacing={3}  direction="row" justify="space-evenly" alignItems="center">

                        <Grid  item container  spacing={3} lg={1} md={4} sm={2} xs={6} 
                         direction="row" 
                        >

                            <Grid item  >
                                <Image src={logo} alt="Logo" />
                            </Grid>

                        </Grid>

                        <Grid item container  spacing={3} lg={5} md={8} sm={10} xs={6}
                        direction="row" 
                        >

                            <Grid item >
                                <Box1>* English</Box1>
                            </Grid>
                            <Grid item >
                                <Box2>$ USD - U.S. Dollar</Box2>
                            </Grid>
                            <Grid item  >
                                <Box3>* Unidted States </Box3>
                            </Grid>


                        </Grid>

                    </Grid>

                </Container>
                </Hidden>

            </FooterContainer>

        </Container>

    )

}



