import { styled } from 'nativewind';
import { StatusBar, Text, View } from 'react-native';

const StyledText = styled(Text)

export function HomeScreen() {
  return <View className="flex justify-center  " >
    <StatusBar style="auto" />
    <Text className="text-red-500">Home screen</Text>
    <StyledText className="text-cyan-800 text-3xl">
      Try editing me! 🎉
    </StyledText>
  </View >
}
