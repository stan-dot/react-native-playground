import React from "react";
import { Button } from "react-native";

type Props = {
  onPress: () => void;
};

const AddCardButton: React.FC<Props> = ({ onPress }) => {
  return <Button title="Create Card" onPress={onPress} />;
};

export default AddCardButton;
