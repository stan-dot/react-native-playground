import { createSelector } from 'reselect';
import { Deck, RootState } from '../types';

const getDecks = (state: RootState) => state.decks;

const getDeckId = (_: RootState, deckId: string) => deckId;

export const selectDeckById = createSelector(
  [getDecks, getDeckId],
  (decks, deckId) => {
    return decks.find((deck:Deck) => deck.id === deckId);
  }
);
