import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AsyncStorage from "@react-native-async-storage/async-storage";
import amplitude from "@amplitude/react-native";

import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { DetailsScreen } from "./screens/DetailsScreen";
import { HomeScreen } from "./screens/HomeScreen";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const initializeAmplitude = async () => {
  let userId = await AsyncStorage.getItem("userId");
  if (!userId) {
    userId = generateRandomUserId(); // Implement this function to generate a unique ID
    await AsyncStorage.setItem("userId", userId);
  }

  const key = process.env.EXPO_PUBLIC_AMPLITUDE_KEY;
  if (!key) {
    throw Error('no amplitude key detected')
  }
  amplitude.getInstance().init(key);
  amplitude.getInstance().setUserId(userId);
};

const Stack = createNativeStackNavigator();
const theme = createTheme({
  lightColors: {
    primary: "#e7e7e8",
  },
  darkColors: {
    primary: "#000",
  },
  mode: "light",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Overview" }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

// Call this function early in your app's initialization
initializeAmplitude();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
