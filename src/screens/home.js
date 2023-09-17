import React from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { text } from "../constants/theme";
import Card from "../components/card";

const Home = ({navigation}) => {
    return (
        <View className="flex-1 w-full">
            <View className="py-6 pb-4 px-4">
                <Text className={`${text.h1}`}>Exercise Routines</Text>
            </View>
            <FlatList 
                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
                bounces={true}
                renderItem={() => (
                    Card({title:"하체", description:"월수금", onPress:()=>{}})
                )}
                keyExtractor={(item) => item}
            />
           
            <TouchableOpacity
            onPressOut={()=>{navigation.navigate('AddRoutine')}}
            className=" bg-sky-400 mx-4 my-2 py-2 items-center rounded-full" style={{elevation:4}}>
                <Text className={`${text.h2} text-white`}>+루틴 추가하기</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;