import AsyncStorage from '@react-native-async-storage/async-storage';

export const amplitudeMiddleware = store => next => action => {
  if (action.type === 'START_DECK') {
    amplitude.getInstance().logEvent('DECK_STARTED');
  }

  if (action.type === 'COMPLETE_DECK') {
    amplitude.getInstance().logEvent('DECK_COMPLETED');
  }

  amplitude.getInstance().logEvent('DECK_COMPLETED', { deckId: '123', duration: 3600 });

  return next(action);
};

export const saveToAsyncStorage = store => next => async (action) => {
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
