import React,{useContext} from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { styles, Image, Header, Paragraph } from './Register.style.js';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import {Context} from '../../router/Router';

function Register() {
    let history = useHistory();
    const consumer = useContext(Context);
    const register = async () => {
        try {
            await axios.post("/api/user/register", {
                userFirstName: formik.values.yourName,
                userEmail: formik.values.email,
                userPassword: formik.values.password1
            })
            history.push("/login");
        } catch (error) {
            //consumer.setDisabledUser(formik.values);
            history.push({
                pathname:"/inUse",
                state:{email:formik.values.email}
            });
        }
    }
    const formik = useFormik({
        initialValues: {
            yourName: "",
            email: "",
            password1: "",
            password2: ""
        },
        validationSchema: Yup.object().shape({
            yourName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password1: Yup.string()
                .required('Required')
                .min(6, 'Must be 6 characters or more'),
            password2: Yup.string()
                .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                .required('Required')
        }),
        onSubmit: () => {
            register();
        },
    });

    const signupStyles = styles();
    return (
        <Container className={signupStyles.wrapper} maxWidth="xs">
            <Image src="https://thecollegepost.com/wp-content/uploads/2019/07/Amazon-logo.png"></Image>
            <form onSubmit={formik.handleSubmit}>

                <Grid className={signupStyles.registerContainer} container spacing={3}>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Header>Create account</Header>
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="yourName"
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                            size="small"
                            value={formik.values.yourName}
                            onChange={formik.handleChange}
                            error={formik.errors.yourName}
                            helperText={formik.errors.yourName}
                            fullWidth
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.errors.email}
                            helperText={formik.errors.email}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="password1"
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.password1}
                            onChange={formik.handleChange}
                            error={formik.errors.password1}
                            helperText={formik.errors.password1}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <TextField
                            name="password2"
                            id="outlined-basic"
                            type="password"
                            label="Re-enter password"
                            variant="outlined"
                            fullWidth
                            size="small"
                            value={formik.values.password2}
                            onChange={formik.handleChange}
                            error={formik.errors.password2}
                            helperText={formik.errors.password2}
                        />
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Button className={signupStyles.button}
                            type="Submit"
                            variant="contained"
                            size="small"
                            fullWidth>
                            Create your Amazon account
                    </Button>
                    </Grid>
                    <Grid item className={signupStyles.inputs} xs={10}>
                        <Paragraph>By creating an account you agree to Amazon's  <a href="#">Conditions of Use & Sale.</a> Please see
                    our <a href="#">Privacy Notice,</a> our <a href="#">Cookies Notice</a> and our <a href="#">Interest-Based Ads Notice.</a>
                        </Paragraph>
                        <Paragraph>Already have an account?  <a href="/login">Sign-In</a></Paragraph>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
export default Register;