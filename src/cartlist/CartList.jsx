import React from "react";

const CartList = ({ cart, removeFromCart }) => {
  return (
    <section>
      {/* <h3>Cart List</h3> */}
      <ul>
        {/* Check if cart is defined and it's an array before calling map */}
        {cart && Array.isArray(cart) ? (
          cart.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        ) : (
          <li>No items in the cart</li>
        )}
      </ul>
    </section>
  );
};

export default CartList;
