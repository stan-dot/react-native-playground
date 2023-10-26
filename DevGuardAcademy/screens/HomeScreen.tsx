import { View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { HomeScreenNavigationProp, styles } from "../App";

type Props = {
  navigation: HomeScreenNavigationProp;
}
// todo list of decks
// add deck button
// stats icon - button to the screen, pushed onto the stack
export function HomeScreen(
  { navigation }: Props,
) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate("Details")}
        />
      </View>
    </View>
  );
}
