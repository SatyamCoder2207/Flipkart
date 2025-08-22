import React from 'react';
import Slider from 'react-slick';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "Lipsticks Combo",
    cta: "From ₹199",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfU5-AgA0_N7Q7LUwG2puI-sUawbeO_xg359kEXjuajfcXcVyU7g28e9syP8vk31sibRWUocsoW-xNF_pPqS1m0vDl-GgYIu6uuwxC1yIe",
  },
  {
    title: "Kids Remote Car",
    cta: "From ₹899",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS2k-D7j96YElWJOZDGOILnJL7WgY2f6O-oklwqYzCNn7Ux1D65FKxR1hfjxmOeVIlzHXS3Vzn9l_tQvAdCFrbcEPrWV_dsh94lkFoZvddK",
  },
  {
    title: "Makeup Brush Set",
    cta: "Flat ₹149",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbgHVat23p6pHUkWeHzYBMi26_MCyw-EKpxiTHLN7A7spqeAHikwHurgGQkRljmiwxMO0q8A4wgzD4XqRubzTnnZs1D-CzevQMDRCbm_Q",
  },
  {
    title: "Barbie Doll",
    cta: "From ₹499",
    img: "https://toysonthesquare.com/cdn/shop/files/HNK99_RD.jpg?v=1730868372&width=1500",
  },
  {
    title: "Hair Dryer",
    cta: "From ₹699",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTggikHgksMzIYSt915PIJWS9Pg51rYrNW2P4BMqKSpO9Z2-Uf-pJgNSLjGV0IoIDLp3GtXSjAG-DD1fzBwr16NrBLSSpQWE-WZGcFdriWYbI1ORyJJ7Oey8A",
  },
  {
    title: "Toy Kitchen Set",
    cta: "From ₹599",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2ILiTv31KkoMWXlw2FnZ1hiozGRhErcJQA8YOWdEYViY7XqdopcjrWn-pvhB-MACZrjBl4z5Dt_RfyZBDPbTjOGNVGteDHYez7poBscTZtUac_yJH1pS8",
  }
];

const BestOfToys = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="electronics-container">
      <h2>Best of Beauty & Toys</h2>
      <Slider {...settings}>
        {products.map((item, index) => (
          <div className="product-item1" key={index}>
            <img src={item.img} alt={item.title} />
            <p className="title">{item.title}</p>
            <p className="cta">{item.cta}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestOfToys;
