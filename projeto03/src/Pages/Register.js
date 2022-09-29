import { View, Text, Button, SafeAreaView, TouchableHighlight, StyleSheet } from 'react-native'

export default function Register({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Register</Text>
            <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
        </SafeAreaView>
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
    }
});