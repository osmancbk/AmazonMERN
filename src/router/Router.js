import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../pages/Home';//*
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Register from "../pages/register";
import Login from "../pages/login";
import InUse from "../pages/inUse";
import Details from "../pages/details";
import Checkout from "../pages/checkout";
import { fetchData, privateFetchData } from '../helper/FetchData';
import { postData } from '../helper/postData';

export const Context = createContext();

function AppRouter() {
    const [productData, setProductData] = useState();
    const [similarProductsData, setsimilarProductsData] = useState([]);
    const [currentProductId, setCurrentProductId] = useState();
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMessage, setsnackBarMessage] = useState();
    //
    const [checkout, setCheckout] = useState()
    const [total, setTotal] = useState()
    const [deleted, setDeleted] = useState()
    const [currentUser, setCurrentUser] = useState()


    useEffect(() => {
        privateFetchData(`api/user/profile`)
        .then(res => setCurrentUser(res))
        .catch(err=> console.log('err', err))
        // console.log('currentUser', currentUser)

    }, [])



    const addToBasket = (id) => {
        postData(`api/user/addProduct/${id}`, id)
            .then((res) => {
                console.log("added to Basket", res);
                // console.log('aaa', res?.checkoutList.length)
                setCheckout(res?.checkoutList); //*
                setsnackBarMessage("Added to Basket");
                snackBarHandleClick();

            })
            .catch((err) => {
                setsnackBarMessage("can not added to Basket", err);
                snackBarHandleClick();
            })
    }

    const getDetails = (id) => {
        fetchData(`api/product/detail/${id}`)
            .then((res) => {
                console.log("Details", res);//*
                setProductData(res?.data?.product);
            })
            .catch((err) => {
                console.log("can not find Product Details", err)
            })
    }

    const snackBarHandleClick = () => {
        setSnackBarOpen(true);
    };

    const snackBarHandleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };


    return (//length, setLenght,
        <Context.Provider value={{
            productData, setProductData, similarProductsData, setsimilarProductsData,
            addToBasket, getDetails, currentProductId, setCurrentProductId, snackBarOpen, setSnackBarOpen, snackBarHandleClick,
            snackBarHandleClose, snackBarMessage, setsnackBarMessage, deleted, setDeleted, total, setTotal, checkout, setCheckout, currentUser, setCurrentUser
        }}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/inUse" component={InUse} />
                    <Route exact path="/details" component={Details} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route path="/" component={HomePage} />
                </Switch>
                <Footer />
            </Router>
        </Context.Provider>
    );
}

export default AppRouter;
