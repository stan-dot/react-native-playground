import { createSelector } from 'reselect';
import { Deck, RootState } from '../types';

const getDecks = (state: RootState) => state.deckState;

const getDeckId = (_: RootState, deckId: string) => deckId;

export const selectDeckById = createSelector(
  [getDecks, getDeckId],
  (d, deckId) => {
    return d.decks.find((deck:Deck) => deck.id === deckId);
  }
);
