import { useCart } from './CartContext';
import './App.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const totalAmount = cart.reduce((sum, item) => sum + item.cta * item.quantity, 0);


  return (
    <div style={{ padding: '30px', minHeight: '100px' }}>
      <h2>Your Cart</h2>
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
    </div>
  );
};

export default Cart;
