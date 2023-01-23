import { Pressable, StyleSheet, Text, View } from "react-native";

export type GoalItemType = {
  text: string;
  id: string;
};

export function GoalItem(props: { item: GoalItemType, onDeleteItem: (id: string) => void }) {
  // this is wrapped as for iOS Text does not support rounded corners
  return (
    <Pressable onPress={() => props.onDeleteItem(props.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item.text}</Text>
      </View>
    </Pressable>
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
