import { SafeAreaView, View, Text, Button } from 'react-native'

export default function Sobre({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sobre</Text>
        <Button
          title="Mais Sobre"
          onPress={() => navigation.navigate('Sobre')}
        />
         <Button title="Vá para a Home" 
         onPress={() => navigation.navigate('Home')} 
        />
        <Button title="Voltar" 
        onPress={() => navigation.goBack()}
        />
      </SafeAreaView>
    );
  }