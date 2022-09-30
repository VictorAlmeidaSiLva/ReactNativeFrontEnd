import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const Tab = createBottomTabNavigator();

export default function RoutesTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Login') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }
                    else if (route.name === 'Register') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'Black',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    );
}