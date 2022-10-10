import { View, Text, Button, SafeAreaView, ScrollView, TouchableHighlight, StyleSheet, TextInput, Image } from 'react-native'

export default function Login({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
            </View>
            <View style={styles.space}>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
            </View>
            <View style={styles.space2}>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "black",
        borderColor: "white",
        alignItems: "center"

    },
    buttonText: {
        flex: 1,
        color: "white"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        opacity: 0.7
    },
    space: {
        padding: 30,
    },
    space2: {
        padding: 10,
    },
    logoImage: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
    },
    logo:{
        flex: 1,
        alignItems: 'center',
    },
});