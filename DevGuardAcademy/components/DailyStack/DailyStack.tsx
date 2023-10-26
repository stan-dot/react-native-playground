import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Flashcard from "../Flashcard/Flashcard"; // Adjust the import path as needed

interface FlashcardData {
  front: string;
  back: string;
}

interface DailyStackProps {
  cards: FlashcardData[];
}

const DailyStack: React.FC<DailyStackProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stack, setStack] = useState<FlashcardData[]>(cards);

  useEffect(() => {
    if (currentIndex >= stack.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, stack]);

  const handleFlip = () => {
    setTimeout(() => {
      // Move the current card to the back of the stack
      const newStack = [...stack];
      const [currentCard] = newStack.splice(currentIndex, 1);
      newStack.push(currentCard);

      setStack(newStack);
      setCurrentIndex(currentIndex + 1);
    }, 2000); // Wait for 2 seconds before moving the card
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        {currentIndex + 1} / {stack.length}
      </Text>
      {stack.length > 0 && currentIndex < stack.length && (
        <Flashcard
          key={stack[currentIndex].front} // Assuming front is unique
          front={stack[currentIndex].front}
          back={stack[currentIndex].back}
          onFlip={handleFlip}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DailyStack;
