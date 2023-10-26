import { createSelector } from 'reselect';
import { Card, Deck, RootState } from '../types';

const getDecks = (state: RootState) => state.decks;

const getDeckId = (_: RootState, deckId: string) => deckId;

const getCardId = (_: any, __: any, cardId: string| undefined) => cardId;


const defaultCard: Card = {
  id: "99999",
  question: "Here put your question",
  answer: "Here put your answer",
};

export const selectCardById = createSelector(
  [getDecks, getDeckId, getCardId],
  (decks, deckId, cardId) => {
    if (!cardId) return defaultCard;
    const deck = decks.find((deck: Deck) => deck.id === deckId);
    if (!deck) return defaultCard;

    return  deck.cards.find((card: Card) => card.id === cardId) ?? defaultCard;
  }
);
