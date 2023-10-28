import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import Flashcard from "./Flashcard";

const FlashcardMeta: ComponentMeta<typeof Flashcard> = {
  title: "Flashcard",
  component: Flashcard,
  args: {
    // front: "Front of the Card",
    // back: "Back of the Card",
    // flipped: true,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default FlashcardMeta;

type FlashcardStory = ComponentStory<typeof Flashcard>;

export const Default: FlashcardStory = (args) => (
  <Flashcard front="Front of the Card" back="Back of the Card" />
);
export const Flipped: FlashcardStory = (args) => (
  <Flashcard front="Front of the Card" back="Back of the Card" flipped={true} />
);

export const LoadingState: FlashcardStory = (args) => (
  <Flashcard front="Loading..." back="Loading..." />
);
