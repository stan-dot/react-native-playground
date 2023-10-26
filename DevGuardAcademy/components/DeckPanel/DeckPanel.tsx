import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { Deck } from "../../store/types";

type DeckPanelProps = {
  deck: Deck;
  callback: any;
};
export default function DeckPanel({ deck, callback }: DeckPanelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.metadata}>{deck.cards.length} cards</Text>
      <Button
        title="Go to Details"
        onPress={() => callback(deck.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3, // for Android
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  metadata: {
    fontSize: 14,
    color: "gray",
  },
});
