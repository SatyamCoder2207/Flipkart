import Slider from "react-slick";
import ProductCard from "./ProductCard";
import products from "./products";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductList = () => {
  // Get unique categories (first product of each category)
  const uniqueCategories = Array.from(
    new Map(products.map((p) => [p.category, p])).values()
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {uniqueCategories.map((product) => (
          <div key={product.category}> 
            <ProductCard product={product} />
          </div>
        ))}
       
      </Slider>
    </div>
  );
};

export default ProductList;
