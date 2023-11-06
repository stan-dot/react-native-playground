import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hook";
import { selectCardById } from "../store/selectors/selectCardById";
import { Card, RootState } from "../store/types";
import { DetailsScreenParamList } from "./DetailsScreen";
import { addCard, updateCard } from "../store/slices/cardsSlice";

type Props = {
  navigation: NativeStackNavigationProp<
    DetailsScreenParamList,
    "CardModal"
  >;
  route: RouteProp<DetailsScreenParamList, "CardModal">;
};

export function CardModal({ navigation, route }: Props) {
  const { deckId, cardId } = route.params;
  const dispatch = useDispatch();
  if (!cardId) {
    console.log("then creating a new card");
  }

  const card: Card = useAppSelector((state: RootState) =>
    selectCardById(state, deckId, cardId)
  );

  const [question, setQuestion] = useState<string>(
    card?.question ?? "Here put your question",
  );
  const [answer, setAnswer] = useState<string>(
    card?.answer ?? "Here put your answer",
  );

  useEffect(() => {
    if (card) {
      setQuestion(card.question);
      setAnswer(card.answer);
    }
  }, [card]);

  const handleSave = () => {
    if (cardId && card) {
      dispatch(updateCard({ id: cardId, question, answer })); // Update existing card
    } else {
      dispatch(addCard({ question, answer })); // Add new card
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a modal!</Text>
      {/* Question Input: Text input for the card's question. */}
      <TextInput
        value={question}
        onChangeText={setQuestion}
        placeholder="Enter Question"
        style={styles.input}
      />
      {/* Answer Input: Text input for the card's answer. */}
      <TextInput
        value={answer}
        onChangeText={setAnswer}
        placeholder="Enter Answer"
        style={styles.input}
      />
      {/* Save Button: Saves the card. */}
      <Button onPress={handleSave} title="Save Card" />
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    marginBottom: 15,
  },
});
