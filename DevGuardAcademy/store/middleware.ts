import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnyAction, Dispatch, Middleware, MiddlewareArray, Store } from '@reduxjs/toolkit';
import { RootState } from './types';

import * as amplitude from '@amplitude/analytics-react-native';

const API_KEY = process.env.EXPO_PUBLIC_AMPLITUDE_KEY;
if (!API_KEY) {
  throw Error(' no api key! ');
}

// todo empty user id might be bad
amplitude.init(API_KEY,"",  {
  // Events queued in memory will flush when number of events exceed upload threshold
  // Default value is 30
  flushQueueSize: 50, 
  // Events queue will flush every certain milliseconds based on setting
  // Default value is 10000 milliseconds
  flushIntervalMillis: 20000,
  serverZone:'EU'
});

 const amplitudeMiddleware:Middleware<{}, RootState> = (store:RootState) => next => action => {
  if (action.type === 'START_DECK') {
    amplitude.getInstance().logEvent('DECK_STARTED');
  }

  if (action.type === 'COMPLETE_DECK') {
    amplitude.getInstance().logEvent('DECK_COMPLETED');
  }

  amplitude.getInstance().logEvent('DECK_COMPLETED', { deckId: '123', duration: 3600 });

  return next(action);
};

 const saveToAsyncStorage:Middleware<{}, RootState> = (store:RootState) => next => async (action) => {
  // Let the action pass to the next middleware or reducer
  let result = next(action);

  // After state is updated, save it to AsyncStorage
  const state = store.getState();

  try {
    await AsyncStorage.setItem('MY_APP_STATE', JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to AsyncStorage:", error);
  }

  return result;
};

export async function loadStateFromAsyncStorage() {
  try {
    const savedState = await AsyncStorage.getItem('MY_APP_STATE');
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Error loading state from AsyncStorage:", error);
  }

  // Return undefined if there's an error or no saved state
  return undefined;
}

// const statsMiddleware: Middleware<{}, RootState> = (store:Store<RootState>) => (next:Dispatch<AnyAction>) => (action:AnyAction) => {
const statsMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  let result = next(action);

  if (action.type === 'SOME_COMPLEX_ACTION') {
    const currentState = store.getState();
    console.log('decks: ', currentState.decks);
    // Do complex calculations or side effects based on the current state and the action
    // Dispatch new actions if needed to update the stats
  }

  return result;
};

export default [amplitudeMiddleware, saveToAsyncStorage, statsMiddleware];
