import { StyleSheet, Text, View } from "react-native";

export type GoalItemType = {
  text: string;
  key: string;
};

export function GoalItem(props: { item: GoalItemType }) {
  // this is wrapped as for iOS Text does not support rounded corners
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
