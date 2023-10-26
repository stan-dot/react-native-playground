import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import { styles, TabStackParamList } from "../App";
import { HomeStackParamList } from "./HomeTab";
import { RouteProp } from "@react-navigation/core";

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, "Home">;
  route: RouteProp<HomeStackParamList, "Home">;
};

// todo add these functionalities
//  list of decks
// add deck button
export function HomeScreenComponent({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <View style={styles.container}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate("Details", { deckId: "1" })}
        />
        <Button
          onPress={() =>
            navigation.navigate("CardModal", { deckId: "1", cardId: "1" })}
          title="Open Modal"
        />
      </View>
    </View>
  );
}
