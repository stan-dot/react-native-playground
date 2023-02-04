import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
// import { sanityClient } from "../sanity";
import { sanityClient } from "../App";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurant] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
        *[_type == "featured" && _id ==$id]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->{
              type->{name}
            }
          }
        }`,
      { id }).then(data => {
        setRestaurant(data?.restaurants);
      })
  }, []);


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
        {restaurants?.map(restaurant => {
          return <RestaurantCard
            id={restaurant.id}
            imgUrl={restaurant.imgUrl}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.genre}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        })
        }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow