import { View } from "react-native";

export type CardTypes = {
  children: React.ReactNode,
  style: number | object | [],
  onSwipedLeft: Function,
  onSwipedRight: Function,
  onSwipedTop: Function,
  onSwipedBottom: Function,
  onSwiped: Function,
};


export function Card(props: CardTypes) {
  return <View>{props.children}</View>
}