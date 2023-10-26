import React, { useState } from "react";
import * as Progress from "react-native-progress";
import { Button, Text, View } from "react-native";

interface FlashcardProps {
  front: string;
  back: string;
  flipped?: boolean;
}

interface CardState {
  correct: number;
  incorrect: number;
  requiredCorrect: number;
}

interface StudyProps {
  cards: FlashcardProps[];
  finishedCallback: any;
}

const StudyPanel: React.FC<StudyProps> = ({ cards, finishedCallback }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [cardsState, setCardsState] = useState<Map<number, CardState>>(() =>
    new Map(
      cards.map((
        _,
        index,
      ) => [index, { correct: 0, incorrect: 0, requiredCorrect: 2 }]),
    )
  );

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSuccess = () => {
    const state = cardsState.get(currentCardIndex) as CardState;
    state.correct += 1;
    const updatedCardsState = new Map(cardsState);
    updatedCardsState.set(currentCardIndex, state);

    setCardsState(updatedCardsState);
    moveToNextCard();
  };

  const handleFail = () => {
    const state = cardsState.get(currentCardIndex) as CardState;
    state.incorrect += 1;
    if (state.incorrect > 5 && state.incorrect % 5 === 0) {
      state.requiredCorrect += 1;
    }
    const updatedCardsState = new Map(cardsState);
    updatedCardsState.set(currentCardIndex, state);

    setCardsState(updatedCardsState);
    moveToNextCard();
  };

  const moveToNextCard = () => {
    const state = cardsState.get(currentCardIndex) as CardState;
    if (state.correct < state.requiredCorrect) {
      // Reinsert the card later for repetition
      cardsState.delete(currentCardIndex);
      cardsState.set(currentCardIndex, state);
    }
    const nextIndex = getNextIndex();
    setCurrentCardIndex(nextIndex);
    setIsFlipped(false);
  };

  const getNextIndex = () => {
    for (let [index, state] of cardsState) {
      if (state.correct < state.requiredCorrect) return index;
    }
    alert("All cards mastered!");
    return currentCardIndex;
  };

  const currentCard = cards[currentCardIndex];
  const progress = (currentCardIndex + 1) / cards.length;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Current Card Display: Shows the front (question) of the card. */}
      <Text>{isFlipped ? currentCard.back : currentCard.front}</Text>
      {/* Flip Button: Toggles between the question and answer. */}
      <Button title="Flip" onPress={handleFlip} />
      {/* Correct/Wrong Buttons: User selects after flipping the card to mark their response. */}
      {isFlipped && (
        <>
          <Button title="Success" onPress={handleSuccess} />
          <Button title="Failed" onPress={handleFail} />
        </>
      )}

      {/* Progress Bar: Visually shows how many cards are left to study in the session. */}
      <Progress.Bar progress={progress} width={200} indeterminate={false} />
      <Progress.Pie progress={progress} size={50} />
      <Text>
        Card {currentCardIndex + 1} of {cards.length}
      </Text>
    </View>
  );
};

export default StudyPanel;
