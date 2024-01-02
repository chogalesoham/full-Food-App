import React from "react";
import { MdAdd, MdDelete } from "react-icons/md";
import { RxDividerHorizontal } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  RemoveToCard,
  IncrementQty,
  DecrementQty,
} from "../Redux/Slices/CardSlice";
import toast, { Toaster } from "react-hot-toast";


const AddCardItems = ({ img, name, qut, praic, id }) => {
  const Dispatch = useDispatch();
  return (
    <div className="add-card-items">
      <img src={img} alt="" />
      <div className="add-item1">
        <h2>{name}</h2>
        <span>₹{praic}</span>
      </div>

      <div className="add-item2">
        <MdAdd
          className="icon"
          onClick={() =>
            qut >= 1 ? Dispatch(IncrementQty({ id })) : (qut = 0)
          }
        />
        <span>{qut}</span>
        <RxDividerHorizontal
          className="icon"
          onClick={() =>
            qut >= 1 ? Dispatch(DecrementQty({ id })) : (qut = 0)
          }
        />
      </div>
      <MdDelete
        onClick={() => {
          Dispatch(RemoveToCard({ id, name }));
          toast.success(`${name} Remove...`, {
            style: {
              border: "2px solid red",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          });
        }}
        className="delet"
      />
    </div>
  );
};

export default AddCardItems;
