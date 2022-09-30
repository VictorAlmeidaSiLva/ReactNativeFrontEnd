import { View, Text, Button, SafeAreaView, ScrollView, TouchableHighlight, StyleSheet, Image } from 'react-native'

export default function Login({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
            </View>
            <View style={styles.space}>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
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
    logoImage: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
    },
    logo: {
        flex: 1,
        alignItems: 'center',
    },
    space: {
        padding: 30,
    },
});