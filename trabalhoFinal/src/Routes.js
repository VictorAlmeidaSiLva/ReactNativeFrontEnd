import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'
import Home from './pages/Home'
import ConsultarClientes from './pages/ConsultarClientes'
import ConsultarProdutos from './pages/ConsultarProdutos'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='RoutesDrawer' component={RoutesDrawer} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

function RoutesTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={DashBoard} options={{ headerShown: false }} />
            <Tab.Screen name='Consultar Clientes' component={ConsultarClientes} options={{ headerShown: false }} />
            <Tab.Screen name='Consultar Produtos' component={ConsultarProdutos} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

function RoutesDrawer() {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='DashBoard' component={RoutesTab} />
        </Drawer.Navigator>
    )
}
