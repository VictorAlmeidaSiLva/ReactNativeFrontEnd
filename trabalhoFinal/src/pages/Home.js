import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient style={{
                height: 'auto',
                width: 'auto',
                marginTop: 'auto',
                borderRadius: 5
            }}
                colors={['#FFFFFF', '#696969']}>
                <Text style={styles.title}>Pear</Text>
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
                </View>
                <View style={styles.textCenter}>
                    <Text style={styles.text}>Endereço: Rua xxxxxxxxx numero: 123</Text>
                    <Text style={styles.text}>Telefone: (14)12345-67890</Text>
                </View>
                <View style={styles.space}>
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#696969"
    },
    textCenter: {
        textAlign: 'center',
        padding: 30,
    },
    text: {
        fontWeight: 'bold'
    },
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
    space: {
        padding: 60,
    },
    logoImage: {
        height: 200,
        width: 200,
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
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});