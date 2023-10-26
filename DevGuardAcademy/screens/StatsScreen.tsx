import { View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { TabStackParamList } from "../App";
import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StatsPanel from "../components/StatsPanel/StatsPanel";

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
