import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home'
import AddRoutine from '../screens/addroutine'

const Stack = createNativeStackNavigator()

const HomeNav = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddRoutine" component={AddRoutine} />
        </Stack.Navigator>
    )
}

export default HomeNav; 