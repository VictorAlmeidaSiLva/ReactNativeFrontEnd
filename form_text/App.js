import React, { useState } from "react";
import { SafeAreaView, StatusBar, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [ num1, setNum1 ] = useState(''); 
  const [ num2, setNum2 ] = useState('');
  const [ res, setRes ] = useState();

  function somar() {
    let n1 = Number(num1)
    let n2 = Number(num2)
    let soma = n1 + n2;
    setRes(soma);
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor='#FF7E01' barStyle='dark-content' translucent={false}></StatusBar>
      <View style={style.viewcontainer}>
        <Text style={style.header}>Caixa de Texto</Text>
        <TextInput style={style.input} placeholder="Digite o valor" placeholderTextColor='white' secureTextEntry={false} value={num1} onChangeText={setNum1} keyboardType='numeric'></TextInput>
        <TextInput style={style.input} placeholder="Digite o valor" placeholderTextColor='white' secureTextEntry={false} value={num2} onChangeText={setNum2} keyboardType='numeric'></TextInput>
        <TouchableOpacity style={style.button} onPress={somar}>
          <Text style={style.textInput}>Enviar</Text>
        </TouchableOpacity>
        <Text style={style.resultado}>{res}</Text>
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
    textAlign: 'center',
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
    backgroundColor: '#FF0034',
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
  },
  resultado: {
    backgroundColor: 'green',
    height: 40,
    borderRadius: 8,
    marginTop: 15,
    textAlign: "center" ,
    fontWeight: 'bold',
    fontSize: 25,
  },
  viewcontainer: {
    width: '90%',
  },
})