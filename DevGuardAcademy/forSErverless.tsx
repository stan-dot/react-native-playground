import { AsyncStorage } from "react-native";

export const initializeAmplitude = async () => {
  let userId = await AsyncStorage.getItem("userId");
  if (!userId) {
    userId = generateRandomUserId(); // Implement this function to generate a unique ID
    await AsyncStorage.setItem("userId", userId);
  }

  const key = process.env.EXPO_PUBLIC_AMPLITUDE_KEY;
  if (!key) {
    throw Error("no amplitude key detected");
  }
  amplitude.getInstance().init(key);
  amplitude.getInstance().setUserId(userId);
};
