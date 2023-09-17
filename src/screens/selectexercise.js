import React from "react";

import { View, Text, FlatList } from "react-native";
import exerciseCard from "../components/exerciseCard";

const SelectExercise = ({navigation}) => {
    return (
        <View className="flex-1 w-full">
            <View className="py-6 pb-4 px-4">
                <Text className="text-3xl">SelectExercise</Text>
            </View>
            <FlatList 
                data={[1,2,3,4,5,6]}
                bounces={true}
                renderItem={() => (
                    exerciseCard({title:"벤치프레스", description:"갑바", done:false,
                    onPress:() => {navigation.navigate("Workout")}})
                )}
                keyExtractor={(item) => item}
            />
        </View>
    );
}

export default SelectExercise;;