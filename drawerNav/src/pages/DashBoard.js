import { View, ScrollView, Text, Image, StyleSheet } from "react-native";

export default function DashBoard() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Pear</Text>
            </View>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
            </View>
            <View style={styles.space}>
                <Text style={styles.title}>Bem-Vindo Usuario</Text>
                <Text style={styles.text}>Nome: XXXXX</Text>
                <Text style={styles.text}>Idade: XX</Text>
                <Text style={styles.text}>Email:xxxxx@gmail.com</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 40,
        color: 'Black',
        textAlign: 'center',
        fontWeight: 'bold',
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
        margin: 20
    },
    text: {
        fontSize: 18,
        color: 'Black',
    }
});