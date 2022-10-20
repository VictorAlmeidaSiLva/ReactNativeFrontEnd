import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
            </View>
            <View>
                <Text>oi</Text>
            </View>
            <View style={styles.space2}>
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
    space2: {
        padding: 10,
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
});