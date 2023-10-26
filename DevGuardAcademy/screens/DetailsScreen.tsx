import { View } from "react-native";
import { Button, Text } from "@rneui/themed";


// Deck Title: At the top.
// List of Cards: Displays all the cards in the deck.
// Study Button: Starts the study mode for that deck.
// Add Card Button: Opens a modal or new screen to add a new card to the deck.

export function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
