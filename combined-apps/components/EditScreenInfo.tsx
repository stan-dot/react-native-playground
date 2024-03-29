import * as WebBrowser from 'expo-web-browser';
import { Text, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      {/* <View style={styles.getStartedContainer}> */}
      <View className="items-center mx-50 bg-slate-50">
        <Text
          // style={styles.getStartedText}
          className="text-lg leading-6 text-center"
        >
          Open up the code for this screen:
        </Text>

        <View
          // style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          className="my-4 rounded-sm px-2"
        >
          <Text>{path}</Text>
        </View>

        <Text
          // style={styles.getStartedText}
          className="text-lg leading-6 text-center"
        >
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      {/* <View style={styles.helpContainer}> */}
      <View className="m-3 items-center">
        <TouchableOpacity onPress={handleHelpPress} >
          {/* <TouchableOpacity onPress={handleHelpPress} className="py-4"> */}
          {/* <Text style={styles.helpLinkText} lightColor={Colors.light.tint}> */}
          <Text className="text-center" lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}
