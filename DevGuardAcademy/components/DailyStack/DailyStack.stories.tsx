// mockData.ts
export const mockFlashcards = [
  {
    front: "What is React?",
    back: "A JavaScript library for building user interfaces.",
  },
  {
    front: "What is a Hook in React?",
    back:
      "Hooks are functions that let you “hook into” React state and lifecycle features from function components.",
  },
  // ... Add more flashcards as needed
];
import React from "react";
import { storiesOf } from "@storybook/react-native";
import DailyStack from "./DailyStack";

storiesOf("DailyStack", module)
  .add("Default", () => <DailyStack cards={mockFlashcards} />)
  .add("Empty State", () => <DailyStack cards={[]} />);
