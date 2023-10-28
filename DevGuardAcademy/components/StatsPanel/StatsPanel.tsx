import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../store/hook";

// todo add accuracy rate.
// todo GraphicalRepresentation: Use graphs or charts to visually represent the user's progress over time.
const StatsPanel = () => {
  const stats = useAppSelector((state) => state.stats); // Assuming you named your reducer 'stats'

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Stats</Text>
      {/* Total Cards Studied: How many cards the user has reviewed. */}
      <Text>Total Cards Studied: {stats.totalCardsStudied}</Text>
      {/* Cards Known: How many cards the user marked as known. */}
      <Text>Cards Known: {stats.cardsKnown}</Text>
      {/* Cards Unknown: How many cards the user marked as unknown. */}
      <Text>Cards Unknown: {stats.cardsUnknown}</Text>
      {/* Study Streak: How many days consecutively the user has studied. */}
      <Text>Study Streak: {stats.studyStreak} days</Text>
      {/* Categories Mastered: Which categories or tags the user has fully understood. */}
      <Text>Categories Mastered: {stats.categoriesMastered.join(", ")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "bold",
  },
});

export default StatsPanel;
