import * as WebBrowser from 'expo-web-browser';
import { View, Text } from 'react-native';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View >
        <Text className="text-red-500" >
          Open up the code for this screen:
        </Text>
      </View>
    </View>
  );
}
