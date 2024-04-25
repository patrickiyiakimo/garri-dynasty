import { useState } from "react";
import { FaHeart } from "react-icons/fa";
// import NagikoImage from "../images/Nagiko Garri.jpg"; 



const Contents = () => {
    const [items, setItems] = useState([
      {
            image: "../images/Nagiko Garri.jpg",
        //   image: NagikoImage,
        title: "Nagiko garri",
        price: "$1000",
        rating: "4.5",
        image: "../images/Abebi garri.jpg",
        id: 1,
      },
      {
        image: "../images/soaking garri.jpg",
        title: "soaking garri",
        price: "$1000",
        rating: "4.5",
        id: 2,
      },
      {
        image: "../images/tropical sun garri.jpg",
        title: "tropical sun garri",
        price: "$1000",
        rating: "4.5",
        id: 3,
      },
      {
        image: "../images/Ayosifam garri.jpg",
        title: "Ayosifam garri",
        price: "$1000",
        rating: "4.5",
        id: 4,
      },
      {
        image: "../images/Garri- Recipe.webp",
        title: "Garri-Recipe garri",
        price: "$1000",
        rating: "4.5",
        id: 5,
      },
      {
        image: "../images/yellow-garri.jpg",
        title: "yellow-garri",
        price: "$1000",
        rating: "4.5",
        id: 6,
      },
      {
        image: "../images/tropical sun garri.jpg",
        title: "tropical sun garri",
        price: "$1000",
        rating: "4.5",
        id: 7,
      },
      {
        image: "../images/Ayosifam garri.jpg",
        title: "Ayosifam garri",
        price: "$1000",
        rating: "4.5",
        id: 8,
      },
      {
        image: "../images/nigerian taste garri.jpg",
        title: "nigerian taste garri",
        price: "$1000",
        rating: "4.5",
        id: 9,
      },
      {
        image: "../images/Abebi garri.jpg",
        title: "Adebi garri",
        price: "$1000",
        rating: "4.5",
        id: 10,
      },
      {
        image: "../images/satchet garri.jpg",
        title: "satchet garri",
        price: "$1000",
        rating: "4.5",
        id: 11,
      },
      {
        image: "../images/tropical sun garri.jpg",
        title: "tropical garri",
        price: "$1000",
        rating: "4.5",
        id: 12,
      },
      {
        image: "../images/Abebi garri.jpg",
        title: "Adebi garri",
        price: "$1000",
        rating: "4.5",
        id: 13,
      },
      {
        image: "../images/Ayosifam garri.jpg",
        title: "Ayosifam garri",
        price: "$1000",
        rating: "4.5",
        id: 14,
      },
      {
        image: "../images/cassa garri.jpg",
        title: "cassa garri",
        price: "$1000",
        rating: "4.5",
        id: 15,
      },
      {
        image: "../images/tropical sun garri.jpg",
        title: "tropical sun garri",
        price: "$1000",
        rating: "4.5",
        id: 16,
      },
      {
        image: "../images/mama put garri.jpg",
        title: "mama put garri",
        price: "$1000",
        rating: "4.5",
        id: 17,
      },
      {
        image: "../images/soaking garri.jpg",
        title: "soaking garri",
        price: "$1000",
        rating: "4.5",
        id: 18,
      },
      {
        image: "../images/tropical sun garri.jpg",
        title: "tropical sun garri",
        price: "$1000",
        rating: "4.5",
        id: 19,
      },
      {
        image: "../images/Abebi garri.jpg",
        title: "Abebi garri",
        price: "$1000",
        rating: "4.5",
        id: 20,
      },
    ]);

  return (
    <div className="content">
      {items.map((item) => (
        <div className="container" key={item.id}>
          <FaHeart />
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Contents;
