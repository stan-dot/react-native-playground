// actions/decks.js
export const addNewDeck = (title) => ({
  type: 'ADD_NEW_DECK',
  payload: { title },
});