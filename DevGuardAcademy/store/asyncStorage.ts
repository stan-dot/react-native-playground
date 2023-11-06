import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Middleware
} from "@reduxjs/toolkit";
import { RootState } from "./types";


// let userId = await AsyncStorage.getItem("userId");
// if (!userId) {
//   userId = generateRandomUserId(); // Implement this function to generate a unique ID
//   await AsyncStorage.setItem("userId", userId);
// }

const API_KEY = process.env.EXPO_PUBLIC_AMPLITUDE_KEY;
// console.log(API_KEY);
// if (!API_KEY) {
//   throw Error(" no api key! ");
// }

// // todo empty user id might be bad
// amplitude.init(API_KEY, "", {
//   // Events queued in memory will flush when number of events exceed upload threshold
//   // Default value is 30
//   flushQueueSize: 50,
//   // Events queue will flush every certain milliseconds based on setting
//   // Default value is 10000 milliseconds
//   flushIntervalMillis: 20000,
//   serverZone: "EU",
// });

export const saveToAsyncStorage: Middleware<{}, RootState> =
  (store) => (next) => async (action) => {
    // Let the action pass to the next middleware or reducer
    let result = next(action);

    // After state is updated, save it to AsyncStorage
    const state = store.getState();

    try {
      await AsyncStorage.setItem("MY_APP_STATE", JSON.stringify(state));
    } catch (error) {
      console.error("Error saving state to AsyncStorage:", error);
    }

    return result;
  };

export async function loadStateFromAsyncStorage() {
  try {
    const savedState = await AsyncStorage.getItem("MY_APP_STATE");
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Error loading state from AsyncStorage:", error);
  }

  // Return undefined if there's an error or no saved state
  return undefined;
}

