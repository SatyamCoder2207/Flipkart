// import React from "react";
// import { Navbar, Container, Form, FormControl, Dropdown } from "react-bootstrap";
// import './App.css';
// import { faArrowAltCircleDown, } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function FlipkartHeader() {
//   return (
//     <Navbar expand="lg" className="flipkart-navbar shadow-sm px-3 py-2" sticky="top">
//       <Container fluid>
//         {/* Logo */}
//         <Navbar.Brand className="d-flex flex-column justify-content-center logo-text">
//           <span className="fw-bold text-primary" style={{ fontSize: '20px' }}>Flipkart</span>
//           <span className="text-muted" style={{ fontSize: '12px', marginTop: '-5px' }}>
//             Explore <span className="text-warning fw-semibold">Plus &#9733;</span>
//           </span>
//         </Navbar.Brand>

//         {/* Search Box */}
//         <Form className="d-flex flex-grow-1 mx-3 search-box">
//           <div className="search-wrapper w-100 d-flex align-items-center rounded px-2 bg-light">
            
//             <FormControl
//               type="search"
//               placeholder="Search for Products, Brands and More"
//               className="border-0 shadow-none bg-transparent"
//             />
//           </div>
//         </Form>

//         {/* Icons */}
//         <div className="d-flex align-items-center gap-3 ms-auto icon-menu">
//           <Dropdown>
//             <Dropdown.Toggle variant="light" id="dropdown-basic" className="border-0 bg-white">
//                <i class="fa-solid fa-user"></i> Login 
//             </Dropdown.Toggle>
//              <FontAwesomeIcon>{faArrowAltCircleDown}</FontAwesomeIcon>
//             <Dropdown.Menu>
//               <Dropdown.Item href="#">My Profile</Dropdown.Item>
//               <Dropdown.Item href="#">Orders</Dropdown.Item>
//               <Dropdown.Item href="#">Wishlist</Dropdown.Item>
//               <Dropdown.Item href="#">Logout</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <i class="fa-solid fa-cart-shopping"></i>
//           <i class="fa-solid fa-store"></i>
//           <i class="fa-solid fa-ellipsis-vertical"></i>

//         </div>
//       </Container>
//     </Navbar>
//   );
// }

// export default FlipkartHeader;


import React, { useState } from "react";
import { Navbar, Container, Form, FormControl, Dropdown } from "react-bootstrap";
import { useCart } from './CartContext';
import './App.css';


function FlipkartHeaderWithCart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.cta * item.quantity, 0);

  return (
    <>
      <Navbar expand="lg" className="flipkart-navbar shadow-sm px-3 py-2" sticky="top">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand className="d-flex flex-column justify-content-center logo-text">
            <span className="fw-bold text-primary" style={{ fontSize: '20px' }}>Flipkart</span>
            <span className="text-muted" style={{ fontSize: '12px', marginTop: '-5px' }}>
              Explore <span className="text-warning fw-semibold">Plus &#9733;</span>
            </span>
          </Navbar.Brand>

          {/* Search Box */}
          <Form className="d-flex flex-grow-1 mx-3 search-box">
            <div className="search-wrapper w-100 d-flex align-items-center rounded px-2 bg-light">
              <FormControl
                type="search"
                placeholder="Search for Products, Brands and More"
                className="border-0 shadow-none bg-transparent"
              />
            </div>
          </Form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3 ms-auto icon-menu">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="border-0 bg-white">
                <i className="fa-solid fa-user"></i> Login
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">My Profile</Dropdown.Item>
                <Dropdown.Item href="#">Orders</Dropdown.Item>
                <Dropdown.Item href="#">Wishlist</Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Cart Icon with Modal Trigger */}
            <button className="cartbtn border-0 bg-white" onClick={handleCartClick} style={{ fontSize: '20px' }}>
              <i class="fa-solid fa-cart-arrow-down"></i>
            </button>

            <i className="fa-solid fa-store"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </Container>
      </Navbar>

      {/* Modal */}
      {isModalOpen && (
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
            <button onClick={handleCloseModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default FlipkartHeaderWithCart;
