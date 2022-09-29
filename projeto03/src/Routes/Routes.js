import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import DashBoard from '../Pages/DashBoard'

const Stack = createNativeStackNavigator()

export default function Routes () {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='DashBoard' component={DashBoard} />
        </Stack.Navigator>
    )
}