import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FlashcardProps {
  front: string;
  back: string;
  flipped?: boolean;
  onFlip?:Function
}

const Flashcard: React.FC<FlashcardProps> = (
  { front, back, flipped = false, onFlip },
) => {
  const [isFlipped, setIsFlipped] = useState(flipped);

  const handlePress = () => {
    setIsFlipped(!isFlipped);
    if (onFlip) {
      onFlip();
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View>
        {isFlipped
          ? <Text style={styles.text}>{back}</Text>
          : <Text style={styles.text}>{front}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    minHeight: 150,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Flashcard;
