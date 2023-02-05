import { View, Text } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

export default function TabTwoScreen() {
  return (
    <View>
      <Text>Tab Two</Text>
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}
