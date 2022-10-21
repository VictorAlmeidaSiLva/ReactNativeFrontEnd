import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-web';

export default function DashBoard({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient style={{
                height: 'auto',
                width: 'auto',
                borderRadius: 5
            }}
                colors={['#FFFFFF', '#696969']}>
                    <View>
                        <Text style={styles.nome}>Bem vindo: Fulano</Text>
                    </View>
                    <View style={styles.userPhoto}>
                        <Image source={require('../../assets/perfil.png')} style={styles.photo}></Image>
                    </View>
                    <View>
                        <Text style={styles.text}>Email: xxxxxxx@gmail.com</Text>
                        <Text style={styles.text}>Estado: Sp</Text>
                        <Text style={styles.text}>Cidade: Bauru City</Text>
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
    userPhoto:{
        flex: 1,
        alignItems: 'left',
    },
    photo:{
        height: 150,
        width: 150,
        resizeMode: 'stretch',
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontWeight: 'bold',
    },
})