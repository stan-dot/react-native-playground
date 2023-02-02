import { styled } from 'nativewind';
import { StatusBar, Text, View } from 'react-native';

const StyledText = styled(Text)

export function HomeScreen() {
  return <View className="flex justify-center text-red-500 " >
    <StatusBar style="auto" />
    <Text>Home screen</Text>
    <StyledText className="text-slate-800">
      Try editing me! 🎉
    </StyledText>
  </View >
}
