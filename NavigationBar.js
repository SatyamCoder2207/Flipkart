import React, { useState } from 'react';
import './App.css';

const categories = {
  Grocery: {
    image: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png',
    items: ['Fruits', 'Vegetables', 'Snacks', 'Beverages']
  },
  Mobiles: {
    image: 'https://cdn-icons-png.flaticon.com/512/597/597177.png',
    items: ['Smartphones', 'Feature Phones', 'Accessories']
  },
  Fashion: {
    image: 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
    items: ['Men', 'Women', 'Kids']
  },
  Electronics: {
    image: 'https://cdn-icons-png.flaticon.com/512/1077/1077073.png',
    items: ['Laptops', 'Cameras', 'Audio']
  },
  'Home&Appliances': {
    image: 'https://cdn-icons-png.flaticon.com/512/1829/1829586.png',
    items: ['Kitchen', 'Furniture', 'Decor']
  },
  Furniture: {
    image: 'https://cdn-icons-png.flaticon.com/512/1973/1973927.png',
    items: ['Beds', 'Sofas', 'Tables']
  }
};


const NavigationBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="menu-container">
      <ul className="main-menu">
        {Object.keys(categories).map((category) => (
          <li
            key={category}
            onMouseEnter={() => setActiveCategory(category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <img
              src={categories[category].image}
              alt={category}
              className="category-icon"
            />
            {category}
            {activeCategory === category && (
              <ul className="submenu">
                {categories[category].items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
