import { PayloadAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { StatsState } from "../types";

const initialState:StatsState = {
  totalCardsStudied: 0,
  cardsKnown: 0,
  cardsUnknown: 0,
  studyStreak: 0,
  categoriesMastered: []
};

const statsSlice = createSlice({
  name: "stats",
  initialState: initialState,
  reducers: {
    // Increment total cards studied
    incrementTotalCardsStudied: (state) => {
      state.totalCardsStudied += 1;
    },

    // Increment cards known
    incrementCardsKnown: (state) => {
      state.cardsKnown += 1;
    },

    // Increment cards unknown
    incrementCardsUnknown: (state) => {
      state.cardsUnknown += 1;
    },

    // Increment study streak
    incrementStudyStreak: (state) => {
      state.studyStreak += 1;
    },

    // Reset study streak
    resetStudyStreak: (state) => {
      state.studyStreak = 0;
    },

    // Add a category to mastered list
    addCategoryMastered: (state, action: PayloadAction<string>) => {
      if (!state.categoriesMastered.includes(action.payload)) {
        state.categoriesMastered.push(action.payload);
      }
    },

    // Remove a category from mastered list
    removeCategoryMastered: (state, action: PayloadAction<string>) => {
      state.categoriesMastered = state.categoriesMastered.filter(
        category => category !== action.payload
      );
    },
    
    // Set a specific state directly, useful for loading stats from a storage
    setStats: (state, action: PayloadAction<StatsState>) => {
      return action.payload;
    },
  },
    
});

// Export the action creators
export const {
  incrementTotalCardsStudied,
  incrementCardsKnown,
  incrementCardsUnknown,
  incrementStudyStreak,
  resetStudyStreak,
  addCategoryMastered,
  removeCategoryMastered,
  setStats,
} = statsSlice.actions;


export default statsSlice.reducer;
