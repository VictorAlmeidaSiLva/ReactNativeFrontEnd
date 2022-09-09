import React from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Image } from 'react-native'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FF9057' barStyle='light-content' translucent={false}></StatusBar>
      <View style={styles.containerBlock}>
        <View style={styles.imageRedim}>
          <Image style={styles.imageHeader} source={require('./assets/gatolouco.png')}></Image>
        </View>
        <View style={styles.textRedim}>
          <Text style={styles.textTitulo}>Victor Augusto</Text>
          <Text style={styles.inter}>Desenvolvedor Fullstack Web/Mobile</Text>
          <Text style={styles.info}>A procura de uma oportunidade</Text>
        </View>
      </View>
      <View style={styles.containerBlock}>
        <View>
          <Text style={styles.info}>Email: victor123@email.com</Text>
          <Text style={styles.info}>Endereço: Rua -------</Text>
          <Text style={styles.info}>Idade: 23</Text>
          <Text style={styles.info}>Cidade: Bauru</Text>
          <Text style={styles.info}>Estado: SP</Text>
        </View>
      </View>
      <View style={styles.containerBlock}>
        <View>
          <Text style={styles.textTitulo}>Experiências</Text>
          <Text style={styles.inter}>Senac 2021-2022</Text>
        </View>
        <View style={styles.textRedim}>
          <Text style={styles.info}>Projeto Integrador:</Text>
          <Text style={styles.info}>Vinhedo</Text>
          <Text style={styles.info}>Vue.js</Text>
        </View>
      </View>
      <View style={styles.containerBlock}>
        <View>
          <Text style={styles.textTitulo}>Educação</Text>
          <Text style={styles.inter}>Senac 2021-2022</Text>
        </View>
        <View style={styles.textRedim}>
          <Text style={styles.info}>Curso Técnico:</Text>
          <Text style={styles.info}>DEV Web/Mobile</Text>
          <Text style={styles.info}>Fullstack</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    padding: 2,
  },
  containerBlock: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'orange',
  },
  imageHeader: {
    height: 120,
    width: 120,
    resizeMode: 'stretch',
  },
  textTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
  inter: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  info: {
    fontWeight: 'bold',
  },
  imageRedim: {
    width: "23.5%",
  },
  textRedim: {
    width: '70.5%',
    marginLeft: 35,
  },
})