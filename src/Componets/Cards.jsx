import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddToCard } from "../Redux/Slices/CardSlice";

const Cards = ({ id, name, price, desc, rating, img, HandelTost }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={img} />

      <div className="card-1">
        <h3>{name}</h3>
        <span>₹ {price}</span>
      </div>

      <p>{desc.slice(0, 60)}.....</p>

      <div className="card-2">
        <span>
          <FaStar />
          <p>{rating}</p>
        </span>

        <button
          onClick={() => {
            dispatch(AddToCard({ id, name, price, rating, qut: 1, img })),
              HandelTost(name);
          }}
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Cards;
