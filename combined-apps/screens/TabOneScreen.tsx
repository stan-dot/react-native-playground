import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import "../tailwind.css";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    // <View style={styles.container}>
    <View className="flex-1 items-center justify-center">
      {/* <Text style={styles.title}>Tab One</Text> */}
      <Text className="text-xl font-bold">Tab One</Text>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <View className="my-12 h-1 w-4/5" lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
