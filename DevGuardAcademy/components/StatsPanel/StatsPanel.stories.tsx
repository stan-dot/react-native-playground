// StatsPanel.stories.js
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Provider } from "react-redux";
import StatsPanel from "./StatsPanel";
import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore();

// storiesOf("StatsPanel", module)
//   .addDecorator((getStory) => <Provider store={store}>{getStory()}</Provider>) // Wrap with Redux provider
//   .add("Default", () => <StatsPanel />)
//   .add("Mastered Several Categories", () => {
//     // You can simulate different states by dispatching actions to the store here.
//     // For example:
//     store.dispatch({
//       type: "UPDATE_CATEGORIES_MASTERED",
//       payload: ["Category 1", "Category 2", "Category 3"],
//     });
//     return <StatsPanel />;
//   });
// // Add more stories as needed
