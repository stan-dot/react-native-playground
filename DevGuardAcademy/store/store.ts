
import { createSlice, configureStore } from '@reduxjs/toolkit';
import breachesReducer from './breachesSlice';
import vulnerabilitiesReducer from './vulnerabilitiesSlice';
import { loadStateFromAsyncStorage, saveToAsyncStorage, amplitudeMiddleware } from './middleware';

export type Card = {
  id: string;
  question: string;
  answer: string;
};

export type Deck = {
  id: string;
  title: string;
  cards: Card[];
};

export type Stats = {
  totalCardsStudied: number;
  cardsKnown: number;
  cardsUnknown: number;
  studyStreak: number;
  categoriesMastered: string[];
};


export type RootState = {
  decks: Deck[];
  stats: Stats;
};

const preloadedState = await loadStateFromAsyncStorage();

const store = configureStore({
  preloadedState,
  reducer: {
    breaches: breachesReducer,
    vulnerabilities: vulnerabilitiesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveToAsyncStorage, amplitudeMiddleware)

});

export default store;


