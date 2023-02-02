import { useNavigation } from '@react-navigation/core';
import { styled } from 'nativewind';
import { SafeAreaView, Image, Text, View, TextInput, ScrollView } from 'react-native';
import { useLayoutEffect } from 'react';
import { ChevronDownIcon, UserIcon, SparklesIcon as SparklesIconOutline } from 'react-native-heroicons/outline';
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';


const StyledText = styled(Text)

export function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // headerTitle: "TESTING",
    });
  }, [])

  return <SafeAreaView className="bg-white pt-5">
    <Text className="text-red-500">
      {/* Header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image source={{ url: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className={"flex-1"}>
          <SparklesIconOutline />
          <StyledText className="font-bold text-gray-400 text-xs">Deliver now!</StyledText>
          <StyledText className="font-bold text-xl">Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </StyledText>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
    </Text>

    {/* Search */}
    <View className="flex-row items-center space-x-2 pb-2 mx-4  px-4">
      <View className="flex flex-row flex-1 space-x-2 bg-gray-200 p-3">
        <MagnifyingGlassIcon color={'gray'} size={20} />
        <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />

      </View>
      <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>

    {/* Body */}
    <ScrollView>
      {/* Categories */}
      {/* Featured Rows*/}

    </ScrollView>

  </SafeAreaView>
}
