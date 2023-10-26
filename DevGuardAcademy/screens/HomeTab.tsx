import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { CardModal } from "./CardModal";
import { HomeScreenComponent } from "./HomeScreen";
import { TabStackParamList } from "../App";
import { RouteProp } from "@react-navigation/core";

type Props = {
  navigation: NativeStackNavigationProp<TabStackParamList, "HomeTab">;
  route: RouteProp<TabStackParamList, "HomeTab">;
};

const HomeStack = createNativeStackNavigator();

export type HomeStackParamList = {
  Home: undefined;
  CardModal: {
    cardId: string;
    deckId: string;
  };
  Study: {
    deckId: string;
  };
  Details: {
    deckId: string;
  };
};

export function HomeTab(
  { navigation }: Props,
) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreenComponent}
        options={{ headerShown: false }}
      />
      <HomeStack.Group screenOptions={{ presentation: "modal" }}>
        <HomeStack.Screen
          name="CardModal"
          component={CardModal}
          options={{ headerShown: false }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
