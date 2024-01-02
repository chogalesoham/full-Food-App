import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const cartItems = useSelector((state) => state.card.card);
  return cartItems.length > 0 ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
