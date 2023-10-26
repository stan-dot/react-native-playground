import React from "react";
import { FlatList, View } from "react-native";
import CardView from "../CardView/CardView";

type Props = {
  cards: {
    id: string;
    question: string;
    answer: string;
  }[];
};

const CardsList: React.FC<Props> = ({ cards }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardView card={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CardsList;
