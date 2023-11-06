import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import { styles, TabStackParamList } from "../App";
import { HomeStackParamList } from "./HomeTab";
import { RouteProp } from "@react-navigation/core";
import ScrollablePanel from "../components/ScrollablePanel/ScrollablePanel";
import AddDeckButton from "../components/AddDeckButton/AddDeckButton";

type Props = {
  navigation: NativeStackNavigationProp<HomeStackParamList, "Home">;
  route: RouteProp<HomeStackParamList, "Home">;
};

export function HomeScreenComponent({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <Text>List of screens</Text>
        <Button
          onPress={() =>
            navigation.navigate("CardModal", { deckId: "1", cardId: "1" })}
          title="Open Modal"
        />
        <AddDeckButton />
        <ScrollablePanel
          callback={(deckid) => () =>
            navigation.navigate("Details", { deckId: deckid })}
        />
      </View>
    </View>
  );
}
