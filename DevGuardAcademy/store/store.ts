
import { configureStore } from '@reduxjs/toolkit';
import breachesReducer from './breachesSlice';
import middleware, { loadStateFromAsyncStorage } from './middleware';
import vulnerabilitiesReducer from './vulnerabilitiesSlice';

const preloadedState = await loadStateFromAsyncStorage();

const store = configureStore({
  preloadedState,
  reducer: {
    breaches: breachesReducer,
    vulnerabilities: vulnerabilitiesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middleware)
});

export default store;

// store.dispatch(setBreaches(breaches));
// store.dispatch(setVulnerabilities(vulnerabilities));

