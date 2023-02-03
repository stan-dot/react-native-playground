import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flew-row items-center justify-between px-4">

        <Text
          className="font-bold text-lg"
        >{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className=" text-xs text-grey-5000 px-4">
        {description}
      </Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        horizontal>

        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imgUrl={"https://picsum.photos/id/237/200/300"}
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is a Test description"}
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl={"https://picsum.photos/id/237/200/300"}
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is a Test description"}
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl={"https://picsum.photos/200/300"}
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is a Test description"}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow