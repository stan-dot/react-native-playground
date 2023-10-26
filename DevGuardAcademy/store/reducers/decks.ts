

// reducers/decks.js
const decks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_DECK':
      return [...state, { title: action.payload.title, cards: [] }];
    default:
      return state;
  }
};

export default decks;