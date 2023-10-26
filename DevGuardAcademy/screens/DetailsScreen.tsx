import { View } from "react-native";
import { Button, Text } from "@rneui/themed";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { TabStackParamList } from "../App";
import { RouteProp } from "@react-navigation/core";
import { HomeStackParamList } from "./HomeTab";

type Props = {
  navigation:
    | NativeStackNavigationProp<HomeStackParamList, "Details">
    | NativeStackNavigationProp<HomeStackParamList, "CardModal">;
  route: RouteProp<HomeStackParamList, "Details">;
};

export type DetailsScreenParamList = {
  CardModal: {
    deckId: string;
    cardId: string;
  };
};

// const CardStackNavigator = createNativeStackNavigator();

// Deck Title: At the top.
// List of Cards: Displays all the cards in the deck.
// Study Button: Starts the study mode for that deck.
// Add Card Button: Opens a modal or new screen to add a new card to the deck.
// todo first load the cards given the deck

export function DetailsScreen({ navigation, route }: Props) {
  const { deckId } = route.params;
  return (
    // <CardStackNavigator.Navigator>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen for deck {deckId}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details", { deckId })}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Study"
        onPress={() => navigation.push("Study", { deckId })}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
    // </CardStackNavigator.Navigator>
  );
}
