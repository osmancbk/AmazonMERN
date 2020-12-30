import React from "react";
import Slider from "react-slick";
import { styles, Wrapper, StyledImage, Page } from './SliderTop.style';
import { Container, Hidden } from '@material-ui/core';

import p1 from '../../assets/1.jpg'
import p2 from '../../assets/2.jpg'
import p3 from '../../assets/3.jpg'
import p4 from '../../assets/4.jpg'
import p5 from '../../assets/5.jpg'
import p6 from '../../assets/6.jpg'
import p7 from '../../assets/7.jpg'


export default function SliderTop() {
    const classes = styles();
    var settings = {
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 4000,
        // autoplaySpeed: 2000,
    //  arrows: true,
    //  nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
    };
    return (
        // <Hidden xsDown>
        <Container maxWidth={'xl'} className={classes.root} >
            <Slider {...settings}>
                <Page><StyledImage src={p1} alt="Logo" /></Page>
                <Page><StyledImage src={p2} alt="Logo" /></Page>
                <Page><StyledImage src={p3} alt="Logo" /></Page>
                <Page><StyledImage src={p4} alt="Logo" /></Page>
                <Page><StyledImage src={p5} alt="Logo" /></Page>
                <Page><StyledImage src={p6} alt="Logo" /></Page>
                <Page><StyledImage src={p7} alt="Logo" /></Page>

            </Slider>
        </Container>
        // </Hidden>
    )


}
