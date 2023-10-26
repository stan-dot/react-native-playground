// DeckPanel.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DeckPanel({ deck }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.metadata}>{deck.cards.length} cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,  // for Android
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  metadata: {
    fontSize: 14,
    color: 'gray',
  },
});
