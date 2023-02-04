import { useNavigation } from '@react-navigation/core';
import { styled } from 'nativewind';
import { SafeAreaView, Image, Text, View, TextInput, ScrollView } from 'react-native';
import { useLayoutEffect, useState, useEffect } from 'react';
import { ChevronDownIcon, UserIcon, SparklesIcon as SparklesIconOutline } from 'react-native-heroicons/outline';
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

// import { sanityClient } from "../sanity";
import { sanityClient } from "../App";

const StyledText = styled(Text)

export function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // headerTitle: "TESTING",
    });
  }, [])


  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          type->{name}
        }
      }
    }
    `).then(data => {
      setFeaturedCategories(data);
    });
  }, [])

  // console.log(featuredCategories);


  return <SafeAreaView className="bg-white pt-5 flex-col">
    {/* Header*/}
    <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
      <Image source={{ url: 'https://picsum.photos/id/1/200/300' }}
        style={{
          width: "7",
          height: "7"
        }}
        className="bg-gray-300 p-4 rounded-full"
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

    {/* Search */}
    <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
      <View className="flex flex-row flex-1 space-x-2 bg-gray-200 p-3">
        <MagnifyingGlassIcon color={'gray'} size={20} />
        <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
      </View>
      <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>

    {/* Body */}
    <ScrollView className="bg-gray-100 flex-1"
      contentContainerStyle={{
        paddingBottom: 100
      }}
    >
      {/* Categories */}
      <Categories />

      {/* Featured*/}
      {featuredCategories?.map(category => {
        return <FeaturedRow
          id={category.id}
          title={category.title}
          description={category.short_description}
          featuredCategory={category.featuredCategory}

        />
      })}

      {/*Tasty Discounts*/}
      <FeaturedRow
        id={1}
        title="Tasty Discounts"
        description="Eveyone's been enjoying these juicy discounts!"
        featuredCategory="discounts"
      />

      {/*Offers near you*/}
      <FeaturedRow
        id={2}
        title="Offers near you!"
        description="Why not support your local restaurant tonight!"
        featuredCategory="offers"
      />
    </ScrollView>

  </SafeAreaView>
}
