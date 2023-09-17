import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home'
import AddRoutine from '../screens/addroutine'
import SelectExercise from '../screens/selectexercise'
import Workout from '../screens/workout'

const Stack = createNativeStackNavigator()

const HomeNav = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddRoutine" component={AddRoutine} />
            <Stack.Screen name="SelectExercise" component={SelectExercise} />
            <Stack.Screen name="Workout" component={Workout} />
        </Stack.Navigator>
    )
}

export default HomeNav; 