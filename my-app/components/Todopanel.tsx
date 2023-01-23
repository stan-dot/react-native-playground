import { useState } from "react";
import {
  FlatList, StyleSheet,
  View
} from "react-native";
import { GoalInputField } from "./GoalInputField";
import { GoalItem, GoalItemType } from "./GoalItem";

export default function Todopanel() {
  const [courseGoals, setCourseGoals] = useState([] as GoalItemType[]);

  function addGoalHandler(text:string) {
    const item: GoalItemType = {
      text: text,
      key: Math.random().toString(),
    };
    setCourseGoals(
      (currentCourseGoals) => [...currentCourseGoals, item],
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInputField
        onSubmit={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          // keyExtractor={(item, index) => item.id} // if using API and ID not key
          renderItem={(itemData) => {
            // scrollview renders everything, not smart for 1000s of items
            return <GoalItem item={itemData.item} />
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 3,
  },
});


