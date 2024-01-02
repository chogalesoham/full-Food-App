import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/categorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const UniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];

    setCategories(UniqueCategories);
    console.log(UniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const Dispacth = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="category-menu">
      <h3>Find The Bast Food</h3>

      <button
        className={` ${
          selectedCategory === "All" && "bg-green-500 text-white"
        }`}
        onClick={() => Dispacth(setCategory("All"))}
      >
        All
      </button>

      {categories.map((category, index) => {
        return (
          <button
            className={
              '${selectedCategory === category && "bg-green-500 text-white"}'
            }
            onClick={() => Dispacth(setCategory(category))}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
