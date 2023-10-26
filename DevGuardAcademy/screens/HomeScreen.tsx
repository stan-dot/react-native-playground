import { View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { styles } from "../App";

export function HomeScreen({ navigation }) {
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
