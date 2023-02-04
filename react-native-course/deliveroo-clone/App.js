import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "./tailwind.css";
// todo comment on this line being problematic

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: '4i58szf4',
  dataset: "production",
  useCdn: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
// RUN THIS to addd execption for localhost 3000 cors policy
// sanity cors add http://localhost:3000
// or in the backend admin board


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

// export default withExpoSnack(App);
