import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function exerciseCard({title, description, done, onPress}) {
  return (
    <TouchableOpacity onPress={() => {onPress()}}
    className="flex-row justify-between items-center px-4 py-4 mx-4 my-2 bg-white rounded-xl" style={{elevation:4}}>
        <View className="space-y-2">
            <Text className="text-2xl">{title}</Text>
            <Text className="text-gray-600">{description}</Text>
        </View>
        <View>
            {
                done ? <Text>😃Done!</Text> : <Ionicons name="md-checkmark-circle" size={32} color="green"  />
            }
        </View>
    </TouchableOpacity>
  )
}
