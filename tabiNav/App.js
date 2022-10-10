import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RoutesNav from './src/Routes/RoutesNav';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false}></StatusBar>
        <RoutesNav />
    </NavigationContainer>
  );
}


