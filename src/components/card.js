import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Card({title, description, onPress}) {
  return (
    <View className="flex-row justify-between items-center px-4 py-4 mx-4 my-2 bg-white rounded-xl" style={{elevation:4}}>
        <View className="space-y-2">
            <Text className="text-2xl">{title}</Text>
            <Text className="text-gray-600">{description}</Text>
        </View>
        <View>
            <TouchableOpacity onPress={()=>onPress}
            className="bg-sky-400 px-2 py-4 rounded-full items-center justify-center" style={{elevation:4}}>
                <Text>Go🖕</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
