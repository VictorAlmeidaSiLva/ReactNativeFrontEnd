import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import RoutesTab from './RoutesTab';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='RoutesTab' component={RoutesTab} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login}   />
            <Stack.Screen name="Register" component={Register}  />
          </Stack.Navigator>
    );
  }