import { RootState } from "../types";

export const getKnownCardPercentage = (state:RootState):number => {
  const { cardsKnown, totalCardsStudied } = state.stats;
  return totalCardsStudied === 0 ? 0 : (cardsKnown / totalCardsStudied) * 100;
};
