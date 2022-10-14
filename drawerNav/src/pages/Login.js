import { Button, ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export default function Login({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
            </View>
            <View style={styles.space}>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
            </View>
            <View style={styles.space}>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('DashBoard')} title="Register">
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Register')} title="Register">
                    <Text style={styles.buttonText}>Register</Text>
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
        padding: 20,
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