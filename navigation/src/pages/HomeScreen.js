import {  View, Text, Button, SafeAreaView } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Sobre"
          onPress={() => navigation.navigate('Sobre')}
        />
        <Button
            title="Cadastro"
            onPress={() => navigation.navigate('Cadastro')}
        />
      </SafeAreaView>
    );
  }