import { withExpoSnack, styled } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

//  function App() {
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <View className="flex-1 items-center justify-center bg-white">
          {/*screens*/}
          <Stack.Screen name="Home" component={HomeScreen} />
        </View>
      </Stack.Navigator>
    </NavigationContainer >
  );
}


// export default withExpoSnack(App);
function something() {
  return <>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
  </>
}