import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import "../tailwind.css";
import tw from 'twrnc';
import { styled } from 'tailwindcss';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-cyan-400`}>I am the homescreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen