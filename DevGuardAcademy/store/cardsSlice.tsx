import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    updateCard: (state, action) => {
      const index = state.findIndex((card) => card.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    addCard: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateCard, addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
