import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ConsultarProdutos({ navigation }){
    return(
        <ScrollView style={styles.container}>
            <LinearGradient style={{
                height: 'auto',
                width: 'auto',
                borderRadius: 5
            }}
            colors={['#FFFFFF', '#696969']}>
                <View>
                    <Text style={styles.text}>Consultar Produtos</Text>
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
    text: {
        fontWeight: 'bold'
    }
})