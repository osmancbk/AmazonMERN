import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { styles, Image, Header, Paragraph, HelpSpan, NewSpan } from '../register/Register.style';
import { useFormik } from 'formik';
import { postData } from '../../helper/postData';
import * as Yup from 'yup';
import { Context } from '../../router/Router';
import SnackBar from '../../components/snackBar'
// import {fetchData} from '../../helper/fetchData'

function Login() {
    let history = useHistory();
   
    const consumer = useContext(Context);


    const onFinish = (values) => {
        postData("/api/user/login", values)
            .then((data) => {
                consumer.setCurrentUser(values);
                localStorage.setItem("token", data.token);
                console.log("token", data.token);
                consumer.getCheckout();
                // setLoggedIn(true);
                history.push("/");
            })
            .catch((err) => {
                console.log("Wrong password or username")
                consumer.setsnackBarMessage("Wrong password or username", err);
                consumer.snackBarHandleClick();
                // toast(err?.message || "An error occured");
            });
    };
    const formik = useFormik({
        initialValues: {
            userEmail: "",
            userPassword: "",
        },
        validationSchema: Yup.object().shape({
            userEmail: Yup.string().email('Invalid email address').required('Required'),
            userPassword: Yup.string()
                .required('Required')
                .min(6, 'Must be 6 characters or more'),
        }),
        onSubmit: () => {
            onFinish(formik.values);
            console.log("Success");
        },
    });

    const signupStyles = styles();
    return (
        <Container className={signupStyles.wrapper} maxWidth="xs">
            <Image src="https://thecollegepost.com/wp-content/uploads/2019/07/Amazon-logo.png"></Image>
            <form
                //onFinish={onFinish} 
                // onFinishFailed={onFinishFailed}
                onSubmit={formik.handleSubmit}
            >

                <Grid className={signupStyles.registerContainer} container spacing={3}>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Header>Sign-In</Header>
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="userEmail"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.userEmail}
                            onChange={formik.handleChange}
                            error={formik.errors.userEmail}
                            helperText={formik.errors.userEmail}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="userPassword"
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.userPassword}
                            onChange={formik.handleChange}
                            error={formik.errors.userPassword}
                            helperText={formik.errors.userPassword}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Button className={signupStyles.button}
                            type="Submit"
                            variant="contained"
                            size="small"
                            fullWidth>
                            Sign-In
                    </Button>
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Paragraph>By signing-in you agree to Amazon's <a href="#">Conditions of Use & Sale.</a>
                            Please see our <a href="#">Privacy Notice</a>, our <a href="#">Cookies Notice</a> and our <a>Interest-Based Ads Notice.</a>
                        </Paragraph>
                    </Grid>
                    <Grid item>
                        <HelpSpan><a href="#">Need help?</a></HelpSpan>
                    </Grid>
                </Grid>
            </form>
            <Grid className={signupStyles.newSpan}>
                <NewSpan>New to Amazon?</NewSpan>
                <Button
                    className={signupStyles.routetoRegister}
                    fullWidth
                    onCli
                    onClick={() => history.push('/register')}
                >Create your Amazon account
                </Button>
            </Grid>
            <SnackBar />
        </Container>
    );
}

export default Login;
