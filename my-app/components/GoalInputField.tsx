import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export function GoalInputField(
  props: {
    onSubmit: (text: string) => void;
  },
) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText: string) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="your course goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        title="Add goal"
        onPress={onButtonPress}
      />
    </View>
  );

  function onButtonPress() {

    props.onSubmit(enteredGoalText);
    setEnteredGoalText("");
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
  },
});
