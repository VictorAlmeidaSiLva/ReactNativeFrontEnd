import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient style={{
                height: 'auto',
                width: 'auto',
                marginTop: 'auto',
                borderRadius: 5
            }}

                colors={['#FFFFFF', '#696969']}>
                <View style={styles.logo}>
                    <Text style={styles.title}>Pear</Text>
                    <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
                </View>
                <View style={styles.space}>
                    <TextInput style={styles.input} placeholder='Email' />
                    <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
                </View>
                <View style={styles.space2}>
                    <TouchableHighlight style={styles.buttonLimpar}>
                        <Text style={styles.buttonText}>Limpar</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.space3}>
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('DashBoard')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.space3}>
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.buttonText}>Criar Conta</Text>
                    </TouchableHighlight>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#696969"
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
        padding: 10,
    },
    space2: {
        alignItems: 'center'
    },
    space3: {
        padding: 10
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        opacity: 0.7
    },
    buttonLimpar: {
        padding: 5,
        backgroundColor: "black",
        borderColor: "white",
        alignItems: "center",
        width: 50,
    }
});