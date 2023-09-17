import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const Workout = ({navigation}) => {
    const [workoutState, setWorkoutState] = useState('beforeStart');
    const [seconds, setSeconds] = useState(0);
    const [weight, setWeight] = useState("");
    const [reps, setReps] = useState("");

    useEffect(() => {
        let timer;
        if (workoutState === 'inProgress') {
            timer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [workoutState]);

    const handleExit = () => {
        if (!weight || !reps) {
            Alert.alert("알림", "몸무게와 횟수를 입력해주세요.");
            return;
        }
        navigation.goBack();
    };

    const handleAddSet = () => {
        if (!weight || !reps) {
            Alert.alert("알림", "몸무게와 횟수를 입력해주세요.");
            return;
        }
        setWeight("");
        setReps("");
        setWorkoutState('beforeStart');
    };

    return (
        <View className="flex-1 w-full justify-center items-center">
          {workoutState === 'beforeStart' && (
            <Text className="text-3xl">운동시작</Text>
          )}
          {workoutState === 'inProgress' && (
            <Text className="text-3xl">{seconds}초</Text>
          )}
          {workoutState === 'finished' && (
            <>
              <Text className="text-3xl">운동 종료</Text>
              <TextInput
                value={weight}
                onChangeText={setWeight}
                placeholder="몇 키로?"
                keyboardType="numeric"
                className="border mt-4 p-2"
              />
              <TextInput
                value={reps}
                onChangeText={setReps}
                placeholder="몇 회?"
                keyboardType="numeric"
                className="border mt-4 p-2"
              />
              <TouchableOpacity style={styles.button} onPress={handleExit}>
                <Text className="text-white">나가기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleAddSet}>
                <Text className="text-white">세트 추가하기</Text>
              </TouchableOpacity>
            </>
          )}
          {workoutState !== 'finished' && (
            <TouchableOpacity 
              style={styles.startButton} 
              onPress={() => {
                if (workoutState === 'beforeStart') {
                  setWorkoutState('inProgress');
                } else if (workoutState === 'inProgress') {
                  setWorkoutState('finished');
                }
              }}
            >
              <Text className="text-white">{workoutState === 'beforeStart' ? "운동시작" : "운동중지"}</Text>
            </TouchableOpacity>
          )}
        </View>
    );
}

const styles = StyleSheet.create({
    startButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#3498db',
        borderRadius: 5,
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#e74c3c',
        borderRadius: 5,
        alignItems: 'center',
        width: 200,
    }
});

export default Workout;
