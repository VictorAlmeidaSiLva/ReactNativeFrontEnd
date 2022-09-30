import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RoutesTab from './src/Routes/RoutesTab';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false}></StatusBar>
        <RoutesTab></RoutesTab>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
