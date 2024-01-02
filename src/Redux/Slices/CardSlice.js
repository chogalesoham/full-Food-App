import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "card",
  initialState: {
    card: [],
  },

  reducers: {
    AddToCard: (state, action) => {
      const existingItem = state.card.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.card = state.card.map((item) =>
          item.id === action.payload.id ? { ...item, qut: item.qut + 1 } : item
        );
      } else {
        state.card.push(action.payload);
      }
    },

    RemoveToCard: (state, action) => {
      state.card = state.card.filter((item) => item.id != action.payload.id);
      return state;
    },

    IncrementQty: (state, action) => {
      state.card = state.card.map((item) =>
        item.id === action.payload.id ? { ...item, qut: item.qut + 1 } : item
      );
    },

    DecrementQty: (state, action) => {
      state.card = state.card.map((item) =>
        item.id === action.payload.id ? { ...item, qut: item.qut - 1 } : item
      );
    },
  },
});

export const { AddToCard, RemoveToCard, IncrementQty, DecrementQty } =
  CardSlice.actions;
export default CardSlice.reducer;
