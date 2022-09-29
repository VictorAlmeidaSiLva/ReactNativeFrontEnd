import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes/Routes'

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false}></StatusBar>
        <Routes></Routes>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
