import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useAppSelector } from "../../store/hook";
import DeckPanel from "../DeckPanel/DeckPanel";

type ScrollablePanelProps = {
  callback: (deckId: string) => void;
};

export default function ScrollablePanel({ callback }: ScrollablePanelProps) {
  // const decks = useAppSelector((state) => state.deckState.decks);

  return (
    <ScrollView style={styles.container}>
      <Text>Testing scroll view</Text>
      {
        /* {decks &&
        decks.map((deck) => (
          <DeckPanel key={deck.title} deck={deck} callback={callback} />
        ))} */
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
