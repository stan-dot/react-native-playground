import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import AddCardButton from "../components/AddCardButton/AddCardButton";
import CardsList from "../components/CardList/CardList";
import { useAppSelector } from "../store/hook";
import { selectDeckById } from "../store/selectors/selectDeckById";
import { RootState } from "../store/types";
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
    cardId?: string;
  };
};

type DeckData = {
  id: string;
  title: string;
  categories: string[];
  // cards - idk if persistence remotely with stuff like mongodb or not, if just locally
};

export function DetailsScreen({ navigation, route }: Props) {
  const { deckId } = route.params;
  const deck = useAppSelector((state: RootState) =>
    selectDeckById(state, deckId)
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen for deck {deck?.title}</Text>

      {/*  Deck Title: At the top. */}
      <Text>Cards number: {deck?.title}</Text>

      <View>
        {/* Add Card Button: Opens a modal or new screen to add a new card to the deck. */}
        <AddCardButton
          onPress={function (): void {
            console.log("add button pressed");
            navigation.navigate("CardModal", { deckId });
          }}
        />
        {/* Study Button: Starts the study mode for that deck. */}
        <Button
          title="Study this deck"
          onPress={() =>
            navigation.push("Study", { deckId: deckId })}
        />
      </View>
      {/* List of Cards: Displays all the cards in the deck. */}
      {deck?.cards && <CardsList cards={deck?.cards} />}
      <View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
}
