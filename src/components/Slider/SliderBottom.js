import React from "react";
import Slider from "react-slick";
import { StyledImage, Page } from './SliderBottom.style';
import { Container, Hidden } from '@material-ui/core';

import p1 from '../../assets/a.jpg'
import p2 from '../../assets/b.jpg'
import p3 from '../../assets/c.jpg'
import p5 from '../../assets/d.jpg'
import p6 from '../../assets/e.jpg'
import p7 from '../../assets/f.jpg'
import p8 from '../../assets/g.jpg'
import p9 from '../../assets/h.jpg'



export default function SliderTop() {

  var settings = {
    // dots: true,
    infinite: true,
    speed: 4000,
    initialSlide: 0,

    slidesToShow: 5,
    slidesToScroll: 2,
    // arrow: true,
    autoplay: true,
    autoplaySpeed: 1300,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // initialSlide: 2
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };



  return (
    //maxWidth={'xl'}
    <Hidden xsDown>
      <Container maxWidth={'xl'} >
        <Slider {...settings}>


          <Page><StyledImage src={p1} alt="Logo" /></Page>
          <Page><StyledImage src={p2} alt="Logo" /></Page>
          <Page><StyledImage src={p3} alt="Logo" /></Page>
          <Page><StyledImage src={p5} alt="Logo" /></Page>
          <Page><StyledImage src={p6} alt="Logo" /></Page>
          <Page><StyledImage src={p7} alt="Logo" /></Page>
          <Page><StyledImage src={p8} alt="Logo" /></Page>
          <Page><StyledImage src={p9} alt="Logo" /></Page>


        </Slider>
      </Container>
    </Hidden>

  )


}
