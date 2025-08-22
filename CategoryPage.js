import { useParams } from "react-router-dom";
import products from "./products.js";
import "./App.css";
import { useCart } from "./CartContext.js";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { addToCart } = useCart();

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <>
      <div className="category-page">
        <h2>{categoryName.toUpperCase()} Products</h2>
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          <div className="category-products">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
                <p>₹{product.cta}</p>
                <div className="row">
                  <div className="addtocart col-lg-6">
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      Add to cart
                    </button>

                  </div>

                  <div className="buynow col-lg-6">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
