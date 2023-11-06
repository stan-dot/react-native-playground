import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, Deck } from "../types";
import { vulnerabilitiesDeck } from "../../data/vulnerabilities";

export const recordActionToAmplitude = createAsyncThunk(
  "deck/recordActionToAmplitude",
  async (
    event: { eventType: string; eventProperties?: object },
    { rejectWithValue },
  ) => {
    try {
      // amplitude.getInstance().logEvent(event.eventType, event.eventProperties);
      // todo here add the Amplitude api ping
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export type DecksSliceState = {
  currentDeckId: number;
  decks: Deck[];
};

const initialDecksState: DecksSliceState = {
  currentDeckId: 0,
  decks: [vulnerabilitiesDeck],
};

const decksSlice = createSlice({
  name: "decks",
  initialState: initialDecksState,
  reducers: {
    // Add a new deck
    addDeck: {
      reducer(state, action: PayloadAction<{ title: string }>) {
        const newDeck: Deck = {
          id: `deck-${Math.random()}`, // You might want to use a better id generation strategy
          title: action.payload.title,
          cards: [],
        };
        state.decks.push(newDeck);
      },
      prepare(deckData) {
        return {
          payload: deckData,
          meta: {
            // Signal to dispatch an async action after the reducer runs
            amplitude: {
              eventType: "ADD_DECK",
              eventProperties: { deckName: deckData.name },
            },
          },
        };
      },
    },

    // Remove a deck by id
    removeDeck: (state, action: PayloadAction<{ deckId: string }>) => {
      state.decks = state.decks.filter((deck) =>
        deck.id !== action.payload.deckId
      );
    },

    // Add a card to a deck
    addCardToDeck: (
      state,
      action: PayloadAction<{ deckId: string; card: Card }>,
    ) => {
      const { deckId, card } = action.payload;
      const deck = state.decks.find((deck) => deck.id === deckId);
      deck?.cards.push({ ...card, id: `card-${Math.random()}` });
    },

    // Remove a card from a deck
    removeCardFromDeck: (
      state,
      action: PayloadAction<{ deckId: string; cardId: string }>,
    ) => {
      const { deckId, cardId } = action.payload;
      const deck = state.decks.find((deck) => deck.id === deckId);
      if (deck) {
        deck.cards = deck.cards.filter((card) => card.id !== cardId);
      }
    },

    // Update a card in a deck
    updateCardInDeck: (
      state,
      action: PayloadAction<{ deckId: string; card: Card }>,
    ) => {
      const { deckId, card } = action.payload;
      const deck = state.decks.find((deck) => deck.id === deckId);
      const cardIndex = deck?.cards.findIndex((c) => c.id === card.id);
      if (deck && cardIndex !== undefined && cardIndex >= 0) {
        deck.cards[cardIndex] = card;
      }
    },
  },
});

export default decksSlice.reducer;

export const {
  addDeck,
  removeDeck,
  addCardToDeck,
  updateCardInDeck,
  removeCardFromDeck,
} = decksSlice.actions;
