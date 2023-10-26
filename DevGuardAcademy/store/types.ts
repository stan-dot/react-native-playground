
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
