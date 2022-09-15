import React from "react";
import { SafeAreaView, StatusBar, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function AppendMode() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor='#FF7E01' barStyle='dark-content' translucent={false}></StatusBar>
      <View>
        <Text style={style.header}>Caixa de Texto</Text>
        <TextInput style={style.input} placeholder="Digite o Nome" placeholderTextColor='white' secureTextEntry={true}></TextInput>
        <TouchableOpacity style={style.button}>
          <Text style={style.textInput}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#30B6FF',
    height: 40,
    borderRadius: 8,
    marginTop: 15,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 15,
    backgroundColor:'#FF0034',
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
  },
})