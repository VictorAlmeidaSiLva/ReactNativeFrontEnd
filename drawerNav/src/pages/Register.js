import { Button, ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export default function Register({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
            </View>
            <View style={styles.space}>
                <TextInput style={styles.input} placeholder='Nome de Usuário' />
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
                <TextInput style={styles.input} placeholder='Repetir Senha' secureTextEntry={true} />
            </View>
            <View style={styles.space}>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')} title="Register">
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoImage: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    logo: {
        flex: 1,
        alignItems: 'center',
    },
    space: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        opacity: 0.7
    },
    button: {
        padding: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "black",
        borderColor: "white",
        alignItems: "center"
    },
    buttonText: {
        color: "white"
    },

});