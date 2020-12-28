import React, { createContext, useState, useEffect } from 'react'
import { Container } from '@material-ui/core';
import { CardList } from '../components/CardList';
import SliderTop from '../components/Slider/SliderTop';
import SliderBottom from '../components/Slider/SliderBottom';
// import {useHistory} from 'react-router-dom';
import { fetchData } from '../helper/FetchData'
export const ProductContext = createContext();

function HomePage() {
    const [productList, setProductList] = useState()

    useEffect(() => {
        fetchData('/api/product/homepage')
            .then(res => setProductList(res?.data?.products))
            .catch(err => console.log(err))
    }, [])


    return (
        <div >
            <ProductContext.Provider value={{ productList }} >

                <SliderTop />
                <CardList />
                <SliderBottom />

            </ProductContext.Provider>
        </div>
    )
}
export default HomePage;
