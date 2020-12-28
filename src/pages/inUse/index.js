import { useContext, useEffect } from 'react';
import { Grid, Container } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { Image } from '../register/Register.style';
import { WarningParagraph, WarningParagraph2,styles, WarningHeader, WarningHeader2,Link } from './inUse.style';
import { Context } from '../../router/Router';
import WarningIcon from '@material-ui/icons/Warning';
import { useHistory } from "react-router-dom";

const InUse = () => {
    const location = useLocation();
    const signupStyles = styles();
    const consumer = useContext(Context);
    let history = useHistory();
    
    return (
        <div>
            <Container maxWidth="xs">
                <Image src="https://thecollegepost.com/wp-content/uploads/2019/07/Amazon-logo.png"></Image>
                <Grid className={signupStyles.registerContainer} container spacing={3}>
                    <Grid item className={signupStyles.warning} xs={10}>
                        <Grid container direction="row" alignItems="center">
                            <WarningIcon style={{ fill: "#FBAB2A" }} />
                            <WarningHeader>E-mail address already in use</WarningHeader>
                        </Grid>
                        <Grid>
                            <WarningParagraph>You indicated you are a new customer, but an account already exists with the e-mail</WarningParagraph>
                            <WarningParagraph><b>{location.state.email}</b></WarningParagraph>
                        </Grid>
                    </Grid>
                    <Grid container className={signupStyles.warning2}>
                        <Grid item xs={10}>
                            <WarningHeader2>Are you a returning customer?</WarningHeader2>
                            <Grid container direction="column">  
                                <Link href="/login">Sign-In</Link>
                                <Link href="/home">Forgotten your password?</Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <WarningHeader2>New to Amazon.de?</WarningHeader2>
                            <WarningParagraph2>Create a new account with a <Link href="/register">different e-mail address</Link></WarningParagraph2>
                            <WarningParagraph2>Create a new account with <Link href="/register">this e-mail address</Link></WarningParagraph2>
                        </Grid>
                        <Grid item xs={10}>
                            <WarningHeader2>Still need help?</WarningHeader2>
                            <Grid container>
                                <Link href="https://www.amazon.de/gp/help/customer/account-issues/ref=ap_cs_email_verify_warn_register?ie=UTF8">Contact Customer Service</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default InUse;