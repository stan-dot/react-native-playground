import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  card: {
    id: string;
    question: string;
    answer: string;
  };
};

const CardView: React.FC<Props> = ({ card }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{card.question}</Text>
      <Text style={styles.answer}>{card.answer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#fff",
    height: 100,
    justifyContent: "center",
  },
  question: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  answer: {},
});

export default CardView;
