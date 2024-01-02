import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/Slices/SearchSlice";

const Navbar = () => {
  const Dispatch = useDispatch();
  return (
    <>
      <nav>
        <div className="nav-box1">
          <h3>{new Date().toUTCString().slice(0, 16)}</h3>
          <h1>Our Food-App</h1>
        </div>

        <div className="nav-box2">
          <input
            type="search"
            name="search"
            id=""
            autoComplete="off"
            placeholder="Search Food Here.."
            onChange={(e) => Dispatch(setSearch(e.target.value))}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
