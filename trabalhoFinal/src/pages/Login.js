import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Login({ navigation }){
    return(
        <ScrollView>
            <View style={styles.space2}>
                <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('DashBoard')}>
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
    space2: {
        padding: 10,
    },
});