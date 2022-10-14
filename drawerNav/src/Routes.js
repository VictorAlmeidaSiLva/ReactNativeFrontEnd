import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'


const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="DashBoard" component={DashBoard} />
        </Drawer.Navigator>
    )
}