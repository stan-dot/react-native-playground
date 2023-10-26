import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../store/hook";

const StatsPanel = () => {
  const stats = useAppSelector((state) => state.stats); // Assuming you named your reducer 'stats'

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Stats</Text>
      <Text>Total Cards Studied: {stats.totalCardsStudied}</Text>
      <Text>Cards Known: {stats.cardsKnown}</Text>
      <Text>Cards Unknown: {stats.cardsUnknown}</Text>
      <Text>Study Streak: {stats.studyStreak} days</Text>
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
