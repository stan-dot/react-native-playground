import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useAppSelector } from "../../store/hook";
import DeckPanel from "../DeckPanel/DeckPanel";

export default function ScrollablePanel() {
  const decks = useAppSelector((state) => state.decks); // Adjust based on your Redux state structure

  return (
    <ScrollView style={styles.container}>
      {decks.map((deck) => <DeckPanel key={deck.title} deck={deck} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
