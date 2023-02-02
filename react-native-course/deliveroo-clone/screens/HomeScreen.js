import { useNavigation } from '@react-navigation/core';
import { styled } from 'nativewind';
import { SafeAreaView, Image, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';

const StyledText = styled(Text)

export function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // headerTitle: "TESTING",
    });
  }, [])

  return <View className="flex justify-center  " >

    <SafeAreaView>
      <Text className="text-red-500">Home screen</Text>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{ url: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <StyledText className="font-bold text-gray-400 text-xs">Deliver now!</StyledText>
          <StyledText className="font-bold text-xl">Current location</StyledText>
        </View>
      </View>
    </SafeAreaView>
  </View >
}
