import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useAppSelector } from "../../store/hook";
import DeckPanel from "../DeckPanel/DeckPanel";

type ScrollablePanelProps = {
  callback: (deckId: string) => void;
};

export default function ScrollablePanel({ callback }: ScrollablePanelProps) {
  const decks = useAppSelector((state) => state.decks); // Adjust based on your Redux state structure

  return (
    <ScrollView style={styles.container}>
      {decks.map((deck) => (
        <DeckPanel key={deck.title} deck={deck} callback={callback} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
