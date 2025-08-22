import Slider from 'react-slick';
import ProductCard from './ProductCard';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    image: 'https://cdn.prod.website-files.com/655e0fa544c67c1ee5ce01c7/655e0fa544c67c1ee5ce1177_different-types-of-microphones-which-one-do-you-need-og.jpeg',
    title: 'Top Mirrorless...',
    cta: 'Shop Now!',
  },
  {
    id: 2,
    image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/headphone/y/x/x/-original-imagztjh6zgyfreg.jpeg?q=70',
    title: 'Best Truewireless...',
    cta: 'Grab Now',
  },                   
  {
    id: 3,
    image: 'https://rukminim2.flixcart.com/image/200/200/l4d2ljk0/monitor/r/l/e/-original-imagfadtfcmg8hgx.jpeg?q=70',
    title: 'ASUS Monitors',
    cta: 'From ₹14999',
  },
  {
    id: 4,
    image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/smartwatch/n/o/r/-original-imagupzfb2k5fghz.jpeg?q=70',
    title: 'Noise Smartwatch',
    cta: 'From ₹1,099',
  },
  {
    id: 5,
    image: 'https://rukminim2.flixcart.com/image/200/200/l4d2ljk0/monitor/r/l/e/-original-imagfadtfcmg8hgx.jpeg?q=70',
    title: 'Dell Monitor',
    cta: 'From ₹10,999',
  },
  {
    id: 6,
    image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/shoe/p/g/p/-original-imaggcbgshbfg9fa.jpeg?q=70',
    title: 'Puma Running Shoes',
    cta: 'From ₹2,999',
  },
  {
    id: 7,
    image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/headphone/j/k/y/-original-imagz8q7c8vhrhnm.jpeg?q=70',
    title: 'boAt Earbuds',
    cta: 'Limited Offer!',
  },
  {
    id: 8,
    image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/watch/y/y/x/-original-imagz64tby8nbmqs.jpeg?q=70',
    title: 'Titan Watch',
    cta: 'Only ₹1,599',
  },
  {
    id: 9,
    image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/t-shirt/o/t/e/m-combo-vneck-tshirt-combo-02-hanex-original-imagqzxfv5zyfchv.jpeg?q=70',
    title: 'Men’s T-shirt',
    cta: 'Combo Deals',
  },
  {
    id: 10,
    image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/bag/z/s/e/-original-imagrgcfngbgfugu.jpeg?q=70',
    title: 'Travel Backpack',
    cta: 'From ₹999',
  },
];

const ProductList = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="product-slider">
        <h1>Best of Smartphone</h1>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;