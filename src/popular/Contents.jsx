import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import NagikoImage from "../images/Nagiko Garri.jpg";
import { toast } from "react-toastify";
import CartList from "../cartlist/CartList";

const Contents = ({}) => {
  const [cart, setCart] = useState([]);
  const [defaultItems, setDefaultItems] = useState([
    {
      title: "Nagiko Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      image: "../images/Abebi garri.jpg",
      id: 1,
    },
    {
      title: "Soaking Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 2,
    },
    {
      title: "Tropical Sun Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 3,
    },
    {
      title: "Ayosifam Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 4,
    },
    {
      title: "Garri-Recipe Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 5,
    },
    {
      title: "Yellow-Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 6,
    },
    {
      title: "Tropical Sun Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 7,
    },
    {
      title: "Ayosifam Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 8,
    },
    {
      title: "Nigerian Taste Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 9,
    },
    {
      title: "Adebi Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 10,
    },
    {
      title: "Satchet Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 11,
    },
    {
      title: "Tropical Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 12,
    },
    {
      title: "Adebi Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 13,
    },
    {
      title: "Ayosifam Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 14,
    },
    {
      title: "Cassa Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 15,
    },
    {
      title: "Tropical Sun Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 16,
    },
    {
      title: "Mama Put Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 17,
    },
    {
      title: "Soaking Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 18,
    },
    {
      title: "Tropical Sun Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 19,
    },
    {
      title: "Abebi Garri",
      price: "$1000",
      rating: "Rating: 4.5",
      id: 20,
    },
  ]);

    const removeFromCart = (itemId) => {
      const updatedCart = cart.filter((item) => item.id !== itemId);
      setCart(updatedCart);
    };

   const notify = (item) => {
     const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
     if (itemIndex !== -1) {
       const updatedCart = [...cart];
       updatedCart.splice(itemIndex, 1);
       console.log('updated cart after removing:', updatedCart)
       setCart(updatedCart);

       toast.error(`${item.title} Removed from cart`, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
        closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
       });
     } else {
       const updatedCart = [...cart, item];
       console.log("Updated cart after adding:", updatedCart)
       setCart(updatedCart);
       setCart([...cart, item]);
      toast.success(`${item.title} added to cart successfully`, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
       });
     }
   };

     return (
       <div>
         <div className="content">
           {defaultItems.map((item) => (
             <div className="container" key={item.id}>
               <FaHeart className="svg" />
               <img src={NagikoImage} alt="nakigo" />
               <div className="section">
                 <p>{item.title}</p>
                 <p>{item.price}</p>
                 <p>{item.rating}</p>
                 <button onClick={() => notify(item)}>
                   {cart.find((cartItem) => cartItem.id === item.id)
                     ? "REMOVED FROM CART"
                     : "ADD TO CART"}
             </button>
           </div>
             </div>
           ))}
         </div>
         <CartList cart={cart} removeFromCart={removeFromCart} />
       </div>
     );
   };

   export default Contents;

  