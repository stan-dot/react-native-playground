import { View, Text, TouchableOpacity, Image } from 'react-native'
import "../tailwind.css";
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image source={{
        uri: imgUrl
      }}
        // className="h-20 w-20 rounded"
        style={{ width: 40, height: 40 }}
      />
      <Text className="absolute bottom-1 left-1 text-white fold-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard