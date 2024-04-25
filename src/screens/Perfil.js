import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Usuario from "../assets/usuario.png";
import Logo from "../assets/logo.png"
import CustomButton from "../components/CustomButton.js";
import { Boogaloo_400Regular, useFonts } from '@expo-google-fonts/boogaloo';
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {

    let [fontsLoaded] = useFonts({
        Boogaloo_400Regular
    });
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.info}>
                <Image style={styles.usuario} source={Usuario}></Image>
                <Text style={styles.text}>Nome</Text>
                <Text style={styles.text}>emaildapessoa@gmail.com</Text>
                <Text style={styles.text}>Contato (xx) xxxx-xxxx</Text>
            </View>
            <CustomButton title="Conhecer Receitas" onPress={() => navigation.navigate('Home')} />
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 40,
        backgroundColor: "#640C0C",

    },
    text: {
        color: "#ECE57D",
        fontSize: 20,
        marginTop: 5,
        fontFamily: "Boogaloo_400Regular",
    },
    usuario: {
        width: 250, height: 250,

    },
    info: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginBottom: 50,


    },
    logo: {
        height: 100,
        width: 100,

    },



})