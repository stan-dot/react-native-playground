import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export function GoalInputField(
  props: {
    onSubmit: (text: string) => void;
    visible: boolean;
    onCancel: () => void;
  },
) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText: string) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function onButtonPress() {
    props.onSubmit(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.jpg")}
          style={styles.image}
        />
        <TextInput
          placeholder="your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={onButtonPress}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#12038",
    borderRadius: 6,
    width: "70%",
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
    height: 80,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
