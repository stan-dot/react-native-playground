
import { Text, View } from "react-native";
import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import "../tailwind.css";
import { styled } from 'nativewind';

const StyledView = styled(View, 'bg-white' );
const StyledText = styled(Text);

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    // <View style={styles.container}>
    <StyledView className="flex-1 items-center justify-center bg-white">
      {/* <Text style={styles.title}>Tab One</Text> */}
      <StyledText className="text-xl font-bold text-red-700">Tab One</StyledText>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <View className="my-12 h-1 w-4/5" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </StyledView>
  );
}
