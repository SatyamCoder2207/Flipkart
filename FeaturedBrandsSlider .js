// FeaturedBrandsSlider.js
import React from "react";
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const brandData = [
  {
    img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/dcd9403add508b2d.jpeg?q=80",
    title: "AI on Android",
    offer: "Explore now",
  },
  {
    img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/07a70e4f874785f4.jpeg?q=80",
    title: "boAt Nirvana",
    offer: "Up to 80% Off",
  },
  {
    img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/3d4d7504831cce4f.jpeg?q=80",
    title: "Intel Gaming Laptops",
    offer: "From ₹89,990",
  },
  {
    img: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/71acb5206a57fa53.jpeg?q=80",
    title: "Red Paste",
    offer: "Up to 30% Off",
  }
];

const FeaturedBrandsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div style={{ padding: "20px", background: "#fff" }}>
      <h3 style={{ marginBottom: "10px" }}>Featured Brands</h3>
      <Slider {...settings}>
        {brandData.map((brand, index) => (
          <div key={index} className="brand-card-wrapper " style={{ padding: "0 10px" }}>
            <div style={{
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <img src={brand.img} alt={brand.title} style={{ width: "100%", height: "auto" }} />
              <div style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "#7b3fe4",
                color: "white",
                textAlign: "center",
                padding: "8px 0",
                fontWeight: "bold"
              }}>
                {brand.offer}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedBrandsSlider;
