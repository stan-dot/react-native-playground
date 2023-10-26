
import { configureStore } from '@reduxjs/toolkit';
import middleware, { loadStateFromAsyncStorage } from './middleware';
import cardsSlice from './cardsSlice';

const preloadedState = await loadStateFromAsyncStorage();

const store = configureStore({
  preloadedState,
  reducer: {
    decks: cardsSlice.arguments,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middleware)
});

export default store;

// store.dispatch(setBreaches(breaches));
// store.dispatch(setVulnerabilities(vulnerabilities));

