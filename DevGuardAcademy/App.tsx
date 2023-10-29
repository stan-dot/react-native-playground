import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createTheme, Text, ThemeProvider } from "@rneui/themed";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { MyTabBar } from "./components/MyTabBar";
import { HomeTab } from "./screens/HomeTab";
import { StatsScreen } from "./screens/StatsScreen";
import { Provider } from "react-redux";
import store from "./store/store";
import { loadStateFromAsyncStorage } from "./store/middleware";

export type TabStackParamList = {
  HomeTab: undefined;
  Stats: undefined;
};

const Tab = createBottomTabNavigator();

// this will remain for login
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  TabStack: undefined;
};

const RootStack = createNativeStackNavigator();

const theme = createTheme({
  lightColors: {
    primary: "#e7e7e8",
  },
  darkColors: {
    primary: "#000",
  },
  mode: "light",
});

function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Group>
        <Tab.Screen
          name="HomeTab"
          component={HomeTab as React.FC}
          options={{ title: "Overview" }}
        />
        <Tab.Screen name="Stats" component={StatsScreen as React.FC} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

function LoginScreen() {
  return (
    <View>
      <Text>Login screen</Text>
    </View>
  );
}

function RegisterScreen() {
  return (
    <View>
      <Text>Register screen</Text>
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="TabStack"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Login"
              component={LoginScreen}
            />
            <RootStack.Screen
              name="Register"
              component={RegisterScreen}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

let AppEntryPoint = App;
if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

// todo add event for state load
loadStateFromAsyncStorage().then((state) => {
  store.dispatch(state);
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
