import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { View,Text} from 'react-native';
import HomeNav from './homenav';
import Today from '../screens/today';
import Statics from '../screens/statics';

const Tab = createBottomTabNavigator();

const MainNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="Exercise" component={HomeNav} options={{
                tabBarLabel: '운동하기',
                tabBarIcon : () => (
                    <View>
                        <Text>😀</Text>
                    </View>),
            }}/>
            <Tab.Screen name="Today" component={Today} options={{
                tabBarLabel: '오늘의기록',
                tabBarIcon : () => (
                    <View>
                        <Text>✏️</Text>
                    </View>),
            }}/>
            <Tab.Screen name="Stat" component={Statics} options={{
                tabBarLabel: '통계',
                tabBarIcon : () => (
                    <View>
                        <Text>📝</Text>
                    </View>),
            }}/>
        </Tab.Navigator>
    )
}

export default MainNav;