import { View } from "react-native";
import { Button, Text } from "@rneui/themed";

// Current Card Display: Shows the front (question) of the card.
// Flip Button: Toggles between the question and answer.
// Correct/Wrong Buttons: User selects after flipping the card to mark their response.
// Progress Bar: Visually shows how many cards are left to study in the session.

export function StudyScreen({ navigation }) {
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
