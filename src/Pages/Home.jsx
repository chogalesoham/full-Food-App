import React from "react";
import Navbar from "../Componets/Navbar";
import CategoryMenu from "../Componets/CategoryMenu";
import FoodItems from "../Componets/FoodItems";
import CardBox from "../Componets/Card-box";

const Home = () => {
  return (
    <>
        <Navbar />
        <CategoryMenu />
        <FoodItems />
        <CardBox />
    </>
  );
};

export default Home;
