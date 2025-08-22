import { Link } from "react-router-dom";
import "./App.css";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link to={`/category/${product.category}`} className="product-card">
        <img src={product.image} alt={product.title} />
        <h5>{product.title}</h5>
        <p className="cta">{product.cta}</p>
      </Link>
    </>

  );
};

export default ProductCard;
