import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createTheme, ThemeProvider } from "@rneui/themed";

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
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
