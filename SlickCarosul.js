import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000
  };
  return (
    <div className="dowm">
        <Slider {...settings}>
      <div>
       <img src="https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/74f0ad81e44e6e6f.jpg?q=80" alt="Beds"/>
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/5b309e98775e22e4.jpg?q=80" alt="Booking"/>
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/076c4f2ee87225d7.jpg?q=80" alt="Flight"/>
      </div>
      <div>
         <img src="https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/1338bd4fc60390d8.jpg?q=80" alt="Comfort"/>
      </div>
      <div>
         <img src="https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/dbd07c8f0d822f95.jpg?q=80" alt="Sofa"/>
      </div>
      <div>
         <img src="https://rukminim1.flixcart.com/fk-p-flap/1010/170/image/de65a463259b7ebb.jpg?q=80" alt="Beds"/>
      </div>
    </Slider>
    </div>
    
  );
}