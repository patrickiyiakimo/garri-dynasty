import React from "react";

const CartList = ({ cart, removeFromCart }) => {
  return (
    <section>
      <ul>
        {cart && Array.isArray(cart) ? (
          cart.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price}
              <button onClick={() => removeFromCart(item.id)}>
                Remove Item
              </button>
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
