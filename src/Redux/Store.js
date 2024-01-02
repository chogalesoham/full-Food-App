import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./Slices/CardSlice";
import categorySlice from "./Slices/categorySlice";
import SearchSlice from "./Slices/SearchSlice";

const Store = configureStore({
  reducer: {
    card: CardSlice,
    category: categorySlice,
    search: SearchSlice,
  },
});

export default Store;
