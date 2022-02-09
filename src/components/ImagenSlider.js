import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImagenSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
      };

  return(
 
    <Carousel {...settings}> 
            <Wrap>  
                <img src="/images/beach.png"/>
            </Wrap>
            <Wrap>  
                <img src="/images/hot.jpg"/>
            </Wrap>
            <Wrap>  
                <img src="/images/body.jpg"/>
            </Wrap>
    </Carousel>

  )
}

export default ImagenSlider;


const Carousel  = styled(Slider)`   
    margin: 20px ;
    height: 300px;
    width: 80%;
 @media (min-width: 820px) {
     width:44vw
 }
`;
const Wrap = styled.div` 
     
    img{
        width: 100%;
        height: 100%;
        background-size: cover;
        max-height: 333px;
       
    //     background-repeat: no-repeat;
    //     display: flex;
    //     justify-content: start;
    //     align-items: start;
    //     margin-right: 3vw;
    //     @media (min-width: 420px) {
    //     width: 410px;
    //     height: 277px;
    //   }
    //   @media (min-width: 500px) {
    //     width: 460px;
    //     height: 306px;
    //   }
    //   @media (min-width: 680px) {
    //     width: 500px;
    //     height: 333px;
    //   }
    //   @media (min-width: 820px) {
    //     width: 55vw;
    //   }
    //   @media (min-width: 900px) {
    //     width: 50vw;
    //   }
    //   @media (min-width: 900px) {
    //     width: 45vw;
    //   }
    }
`;

