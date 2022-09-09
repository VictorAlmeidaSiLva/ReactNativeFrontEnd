import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageHeader} source={require('./assets/gatolouco.png')}></Image>
        <Text style={styles.textheader}>Victor Augusto{'\n'}
          Aluno SENAC{'\n'}
          Desenvolvimento Web/Mobile Fullstack
        </Text>
      </View>
      <View style={{borderBottomColor: 'black',borderBottomWidth: StyleSheet.hairlineWidth,}}/>
      <View>
        <Text style={styles.textheader}>Contato</Text>
        <Text style={styles.text}>Telefone: 1234-1234{'\n'}Email: victor12345@email.com</Text>
      </View>
      <StatusBar backgroundColor='#ff9057' barStyle='default' translucent={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  imageHeader: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  textheader: {
    fontSize: 25,
    color: 'blue',
  },
  text:{
    fontSize: 15,
    fontWeight: 'bold',  },
});
