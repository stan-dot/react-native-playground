// import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import ThreeBoxes from './components/ThreeBoxes';
import Todopanel from './components/Todopanel';

export default function App() {
  return (
    <View style={styles.container}>
      <Todopanel />
      {/* <View>
        <Text style={styles.dummyText}>
          Hello world!
          hi
          hi 2
        </Text>
      </View>
      <Text style={styles.dummyText}>another text</Text>
      <Button title="Tap me" /> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <ThreeBoxes /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16, borderWidth: 2, padding: 16, borderColor: 'red'
  }
});
