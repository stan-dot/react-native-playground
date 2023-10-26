import { View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { TabStackParamList } from "../App";
import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StatsPanel from "../components/StatsPanel/StatsPanel";

// Daily Progress: Shows how many cards were studied and the accuracy rate.
// Overall Progress: Displays overall performance metrics.
// For the StatsPanel specifically, the structure would be based on the metrics you want to track. You could have a statsReducer in Redux to keep track of user progress, which updates every time a user marks a card as known/unknown, adds a card, etc. Then, your StatsPanel component would pull data from this reducer to display it.
// StatsPanel: Display a summary of the user's progress. Here are some metrics you might consider:

// Total Cards Studied: How many cards the user has reviewed.
// Cards Known: How many cards the user marked as known.
// Cards Unknown: How many cards the user marked as unknown.
// Study Streak: How many days consecutively the user has studied.
// Categories Mastered: Which categories or tags the user has fully understood.
// GraphicalRepresentation: Use graphs or charts to visually represent the user's progress over time.

type Props = {
  navigation: NativeStackNavigationProp<TabStackParamList, "Stats">;
  route: RouteProp<TabStackParamList, "Stats">;
};

export function StatsScreen({ navigation, route }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Stats Screen</Text>
      <Button
        title="Go back"
        onPress={() =>
          navigation.goBack()}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <StatsPanel />
    </View>
  );
}
