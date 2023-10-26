import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import { HomeStackParamList } from "./HomeTab";

// Current Card Display: Shows the front (question) of the card.
// Flip Button: Toggles between the question and answer.
// Correct/Wrong Buttons: User selects after flipping the card to mark their response.
// Progress Bar: Visually shows how many cards are left to study in the session.

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, "Study">;
  route: RouteProp<HomeStackParamList, "Study">;
};

// todo either go to here through the home screen directly or from details of a screen
export function StudyScreen({ navigation }: Props) {
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
    </View>
  );
}
