import React, { useState } from "react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

export default function AddDeckButton() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddDeck = () => {
    if (title) {
      dispatch({ type: "ADD_NEW_DECK", payload: { title } }); // Adjust the action type and payload based on your store structure
      setTitle(""); // Reset the title for the next input
      setModalVisible(false); // Close the modal
    } else {
      // Handle empty title (e.g. show a warning)
    }
  };

  return (
    <>
      <Button title="Add Deck" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: 300,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Text>New Deck Title</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginTop: 10,
              }}
              onChangeText={setTitle}
              value={title}
            />
            <Button title="Add" onPress={handleAddDeck} />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ marginTop: 10, textAlign: "center" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
