import React from 'react';
import './App.css'; 

const products = [
  {
    title: "Baby diapers",
    subtitle: "Min. 50% Off",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/9ba0a82d6a69d842.jpg?q=80",
  },
  {
    title: "Auto accessories",
    subtitle: "From ₹79",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/f4523a4d451644a0.jpg?q=80",
  },
  {
    title: "Instrument deals!",
    subtitle: "Up to 70% Off",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/9fcd0121fc900ead.jpg?q=80",
  },
  {
    title: "Top Smartwatches",
    subtitle: "From ₹999",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/5e5677f3aba1bd8c.png?q=80",
  },
  {
    title: "Gen young fashion",
    subtitle: "From ₹249 + 10% Off",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/35f61c4271dcd718.jpg?q=80",
  },
  {
    title: "Core Ultra AI PC",
    subtitle: "Just ₹47,999",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/25fc7992288d87ea.jpg?q=80",
  },
  {
    title: "Home emergency light",
    subtitle: "From ₹149",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/2a4e25aa83d14ac1.jpg?q=80",
  },
  {
    title: "Cool picks inside",
    subtitle: "From ₹9,990",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/dd6cc41c418b9c15.jpg?q=80",
  },
  {
    title: "Shirts, trousers…",
    subtitle: "Under ₹899",
    img: "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/ee753b8c57dcf2a5.jpg?q=80",
  },
];

const ProductGrid = () => {
  return (
    <div className="container py-4">
      <div className="row g-3">
        {products.map((item, idx) => (
          <div className="col-12 col-sm-6 col-md-4" key={idx}>
            <div className="image card text-center shadow-sm h-100">
              <img
                src={item.img}
                alt={item.title}
                className="card-img-top "
                style={{ maxHeight: '180px', objectFit: 'contain' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
