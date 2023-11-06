import { configureStore } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import statsReducer from "../../store/slices/statsSlice";
import StatsPanel from "./StatsPanel";

const store = configureStore({
  reducer: statsReducer,
});
const StatsPanelMeta: ComponentMeta<typeof StatsPanel> = {
  title: "StatsPanel",
  component: StatsPanel,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Provider store={store}>
          <Story />
        </Provider>
      </View>
    ),
  ],
};

export default StatsPanelMeta;

type StatsPanelStory = ComponentStory<typeof StatsPanel>;
export const defaultStory: StatsPanelStory = (args) => <StatsPanel />;
export const MasteredSeveralCategories: StatsPanelStory = (args) => {
  store.dispatch({
    type: "UPDATE_CATEGORIES_MASTERED",
    payload: ["Category 1", "Category 2", "Category 3"],
  });
  return <StatsPanel />;
};
