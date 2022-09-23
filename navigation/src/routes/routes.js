import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../pages/HomeScreen'
import Sobre from '../pages/Sobre'
import Cadastro from '../pages/Cadastro'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Sobre" component={Sobre} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}