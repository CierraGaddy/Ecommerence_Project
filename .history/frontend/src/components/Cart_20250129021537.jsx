import React, { useState } from "react"; // Import React and useState to manage cart state

const Cart = () => {
  // Define the cart state using useState. This keeps track of what’s in the cart.
  const [cartItems, setCartItems] = useState([
    {
      id: 1, // Unique ID for the product
      name: "Radiant Glow Foundation", // Product name
      price: 30.0, // Price of the product
      image: "/Images/product1.jpeg", // Image source
      quantity: 1, // Number of this item in the cart
    },
    {
      id: 2,
      name: "Hydrating Concealer",
      price: 20.0,
      image: "/Images/product7.jpeg",
      quantity: 2,
    },
  ]);

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    // This creates a new array with everything EXCEPT the item being removed
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {/* If the cart is empty, show a message. Otherwise, show the cart items */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p> // This displays when there are no items in the cart
      ) : (
        <div className="cart-items">
          {/* Loop through each cart item and display it */}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />{" "}
              {/* Show product image */}
              <div className="cart-item-details">
                <h3>{item.name}</h3> {/* Product name */}
                <p>Price: ${item.price.toFixed(2)}</p>{" "}
                {/* Price with 2 decimal places */}
                <p>Quantity: {item.quantity}</p>{" "}
                {/* Show quantity of this item */}
                {/* Remove button: When clicked, removes this item from the cart */}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart; // Export the Cart component so it can be used in other files
