import React from 'react'
import { CardList } from '../components/CardList';
import SliderTop from '../components/Slider/SliderTop';
import SliderBottom from '../components/Slider/SliderBottom';

function HomePage() {

    return (
        <div >
            <SliderTop />
            <CardList />
            <SliderBottom />
        </div>
    )
}
export default HomePage;
