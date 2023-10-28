import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { View } from "react-native";
import DailyStack from "./DailyStack";

const mockFlashcards = [
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

const DailyStackMeta: ComponentMeta<typeof DailyStack> = {
  title: "DailyStack",
  component: DailyStack,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default DailyStackMeta;
type DailyStackStory = ComponentStory<typeof DailyStack>;
export const Default: DailyStackStory = (args) => (
  <DailyStack cards={mockFlashcards} />
);
export const EmptyState: DailyStackStory = (args) => <DailyStack cards={[]} />;
