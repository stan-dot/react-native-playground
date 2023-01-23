import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function Todopanel() {


  return <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder="your course goal!" style={styles.textInput} />
      <Button title="Add goal" />
    </View>
    <View style={styles.goalsContainer}>
      <Text>
        List of goals
      </Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%'
  },

  goalsContainer: {
    flex: 3
  }
})