
import { configureStore } from '@reduxjs/toolkit';
import middleware, { loadStateFromAsyncStorage } from './middleware';
import cardsSlice from './cardsSlice';
import statsReducer from './statsReducer';

const store = configureStore({
  reducer: {
    decks: cardsSlice,
    stats: statsReducer
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middleware)
});

export default store;

// store.dispatch(setBreaches(breaches));
// store.dispatch(setVulnerabilities(vulnerabilities));

