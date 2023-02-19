import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import TodoList from '../components/TodoList';

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tab Two</Text>
      <View className="my-12 h-1 w-4/5"  />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      <TodoList/> 
    </View>
  );
}
