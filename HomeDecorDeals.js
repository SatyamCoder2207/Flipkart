import React from 'react';
import './App.css';

const decorProducts = [
  {
    image: "https://rukminim2.flixcart.com/image/190/190/xif0q/wall-clock/r/o/b/handpainted-peacock-wall-clock-32-5-wc-331-analog-divinecrafts-original-imahbzdadxeahpj5.jpeg?q=80",
    title: "Elegant Curtains",
    offer: "Flat 60% Off",
    offerStyle: "green"
  },
  {
    image: "https://rukminim2.flixcart.com/image/190/190/xif0q/umbrella/a/h/l/50-rainbow-multi-color-rainbow-umbrella-for-girls-rainbow-original-imahdpcvkcmhymk9.jpeg?q=80",
    title: "Wooden Showpieces",
    offer: "Handcrafted Picks",
    offerStyle: "blue"
  },
  {
    image: "https://rukminim2.flixcart.com/image/190/190/xif0q/mosquito-net/c/g/x/king-size-bed-polyester-double-bed-with-saviours-suitable-for-6-original-imahckr75wyz9zdf.jpeg?q=80",
    title: "Mattress Protectors",
    offer: "Bestseller",
    offerStyle: "green"
  },
  {
    image: "https://rukminim2.flixcart.com/image/190/190/xif0q/bulb/i/d/e/2-12w-inverter-bulb-with-b22-based-high-battery-backup-pack-of-2-original-imahcxafvhm5zb28.jpeg?q=80",
    title: "Cotton Bedsheets",
    offer: "Premium Comfort",
    offerStyle: "blue"
  }
];


const HomeDecorDeals = () => {
  return (
    <div className="decor-deals">
      <div className="deals-header">
        <h4>Home Decor & Furnishings</h4>
        <button className="arrow-button">›</button>
      </div>

      <div className="products-row">
        {decorProducts.map((item, index) => (
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

export default HomeDecorDeals;

