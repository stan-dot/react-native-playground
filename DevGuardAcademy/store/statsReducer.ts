// statsReducer.js
const initialState = {
  totalCardsStudied: 0,
  cardsKnown: 0,
  cardsUnknown: 0,
  studyStreak: 0,
  categoriesMastered: []
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add your action cases here...
    default:
      return state;
  }
};

export default statsReducer;
