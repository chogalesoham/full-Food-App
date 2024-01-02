import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AddCardItems from "./AddCardItems";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardBox = () => {
  const [activeCard, setActiveCard] = useState(false);
  const Navigate = useNavigate()

  const CardItems = useSelector((state) => state.card.card);
  // console.log(CardItems);

  const TotalQut = CardItems.reduce((totalQut, item) => totalQut + item.qut, 0);
  const TotalPraice = CardItems.reduce(
    (totalPraice, item) => totalPraice + item.qut * item.price,
    0
  );

  return (
    <>
      <FaCartArrowDown
        className={`CardIcons ${
          TotalQut > 0 &&
          "animate-bounce delay-500 transition-all duration-500 "
        }`}
        onClick={() => setActiveCard(!activeCard)}
      />
      <div
        className={` card-box ${
          activeCard ? "translate-x-0" : "translate-x-full"
        } "transition-all duration-500 `}
      >
        <div className="card-heder">
          <h1>My Order</h1>
          <span>
            <AiOutlineClose onClick={() => setActiveCard(!activeCard)} />
          </span>
        </div>
        <hr />
        <div className="oooo">
          {CardItems.length > 0 ? (
            CardItems.map((food) => {
              return (
                <AddCardItems
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  praic={food.price}
                  qut={food.qut}
                  img={food.img}
                  rating={food.rating}
                />
              );
            })
          ) : (
            <div className="ECard">
              <div className="img">
                <img
                  src="https://eei.edu/wp-content/uploads/2017/03/cart-empty-300x195.png"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div className="card-footer">
          <h2>Items: {TotalQut}</h2>
          <h2>Total Amount:{TotalPraice}</h2>
          <hr />
          <button onClick={() => Navigate("/succes")}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CardBox;
