import { useState } from "react";
import { useCart } from './CartContext';
import './App.css';

function CartModaladd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="cartbtn" onClick={handleCartClick} style={{ fontSize: '24px' }}>
        🛒
      </button>
      {isModalOpen && <CartModal onClose={handleCloseModal} />}
    </div>
  );
}

const CartModal = ({ onClose }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const totalAmount = cart.reduce((sum, item) => sum + item.cta * item.quantity, 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-details">
                  <h5>{item.title}</h5>
                  <p>₹{item.cta}</p>
                  <div className="cart-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>−</button>
                    <span className="cart-quantity">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <h3>Total: ₹{totalAmount}</h3>
            </div>
          </>
        )}

        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default CartModaladd;
