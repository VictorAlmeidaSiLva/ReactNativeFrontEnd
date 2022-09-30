import { View, Text, Button, SafeAreaView, TouchableHighlight, StyleSheet, Image, TextInput, ScrollView } from 'react-native'

export default function Register({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
            </View>
            <View style={styles.space}>
                <TextInput style={styles.input} placeholder='Nome' />
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
                <TextInput style={styles.input} placeholder='Repita a senha' secureTextEntry={true} />
            </View>
            <View style={styles.space2}>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Criar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
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
    logoImage: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
    },
    logo: {
        flex: 1,
        alignItems: 'center',
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
});