import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import { HomeStackParamList } from "./HomeTab";
import { selectDeckById } from "../store/reselect/selectDeckById";
import { useAppSelector } from "../store/hook";
import StudyPanel from "../components/StudyPanel/StudyPanel";


type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, "Study">;
  route: RouteProp<HomeStackParamList, "Study">;
};

export function StudyScreen({ navigation, route }: Props) {
  const { deckId } = route.params;
  const deck = useAppSelector((state) => selectDeckById(state, deckId));
  if (!deck) {
    return (
      <View>
        <Text>No such deck to study!</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Study Screen</Text>
      <Button
        title="Go back"
        onPress={() =>
          navigation.goBack()}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      {deck.cards
        ? (
          <StudyPanel
            cards={deck!.cards.map((c) => {
              return { front: c.question, back: c.answer };
            })}
            finishedCallback={() => {
              console.log("finished this deck!");
            }}
          />
        )
        : <Text>No cards in this deck!</Text>}
    </View>
  );
}
