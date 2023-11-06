import { DecksSliceState } from "./slices/decksSlice";

export type Card = {
  id: string;
  question: string;
  answer: string;
};

export type Deck = {
  id: string;
  title: string;
  cards: Card[];
  categories?:string[]
};

export type StatsState = {
  totalCardsStudied: number;
  cardsKnown: number;
  cardsUnknown: number;
  studyStreak: number;
  categoriesMastered: string[];
};


export type RootState = {
  deckState: DecksSliceState;
  stats: StatsState;
};
