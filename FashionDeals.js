import React from 'react';
import './App.css';

const fashionProducts = [
  {
    image: "https://rukminim2.flixcart.com/image/190/190/xif0q/sandal/l/u/f/6-sandal-6061-6-bersache-black-original-imah5e49jytjgfbe.jpeg?q=80",
    title: "Men’s Slippers & Flip Fl...",
    offer: "Min. 70% Off",
    offerStyle: "green"
  },
  {
    image: "https://rukminim2.flixcart.com/image/190/190/xif0q/t-shirt/s/z/d/m-hs1-patta-gray-1121-kaspy-original-imah3hbnengyh6fq.jpeg?q=80",
    title: "Men's T-shirts",
    offer: "In Focus Now",
    offerStyle: "blue"
  },
  {
    image: "https://rukminim2.flixcart.com/image/190/190/xif0q/shirt/u/r/z/3xl-met-veb-formal-wine-s-jadouncreation-original-imah5bzpmfgetbbb.jpeg?q=80",
    title: "Casual Shirts",
    offer: "Special offer",
    offerStyle: "green"
  },
  {
    image: "https://rukminim2.flixcart.com/image/190/190/xif0q/sari/e/m/o/free-9-patti-prisha-unstitched-original-imahd9jdwzjtg7yp.jpeg?q=80",
    title: "Women's Sarees",
    offer: "Widest Range",
    offerStyle: "blue"
  }
];

const FashionDeals = () => {
  return (
    <div className="fashion-deals">
      <div className="deals-header">
        <h4>Fashion's Top Deals</h4>
        <button className="arrow-button">›</button>
      </div>

      <div className="products-row">
        {fashionProducts.map((item, index) => (
          <div className="deal-card" key={index}>
            <img src={item.image} alt={item.title} className="deal-image" />
            <p className="deal-title">{item.title}</p>
            <p className={`deal-offer ${item.offerStyle}`}>{item.offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionDeals;
