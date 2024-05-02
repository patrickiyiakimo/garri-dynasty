import React from "react";

const CartList = ({ cart }) => {

 if (!cart) {
   return <div>No items in the cart</div>;
 } 


  return (
    <section>
      <h3>Cart List</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
      console.log("cart prop in CartList:", cart)
    </section>
  );
};

export default CartList;
