// Question Input: Text input for the card's question.
// Answer Input: Text input for the card's answer.
// Save Button: Saves the card.

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import { DetailsScreenParamList } from "./DetailsScreen";
import { RouteProp } from "@react-navigation/core";

type Props = {
  navigation: NativeStackNavigationProp<
    DetailsScreenParamList,
    "CardModal"
  >;
  route: RouteProp<DetailsScreenParamList, "CardModal">;
};

export function CardModal({ navigation }: Props) {
  const r = navigation;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button
        onPress={() =>
          navigation.goBack()}
        title="Dismiss"
      />
    </View>
  );
}
