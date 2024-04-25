import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Imagem from "../assets/logo.png";
import usuario from "../assets/usuario.png";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Boogaloo_400Regular, useFonts } from '@expo-google-fonts/boogaloo';
import { useNavigation } from '@react-navigation/native';

export default function Home({ route }) {
    const navigation = useNavigation();

    const { receita } = route.params;

    let [fontsLoaded] = useFonts({
        Boogaloo_400Regular
    });

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                height: 85,
                backgroundColor: "#640C0C",
                marginTop: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: 8
            }}>
                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={32} color="#ece57d" />
                </TouchableOpacity>
                <Image style={{
                    height: 100,
                    width: 100,
                }}
                    source={Imagem} />
                <TouchableOpacity style={{}} onPress={() => navigation.navigate('Perfil')}>
                    <Image style={{ height: 50, width: 50, }} source={usuario} />
                </TouchableOpacity>

            </View>

            <ScrollView>
                <StatusBar barStyle="light-content" backgroundColor="#640C0C" />
                <Image style={{ width: 410, height: 200, alignItems: "center", marginTop: 1, borderRadius: 10 }}
                    source={{ uri: `http://10.0.2.2:3000/assets/${receita.fotos}` }} />
                <Text style={styles.texto}>{receita.nome}</Text>
                <Text style={{ color: "#640C0C", textAlign: "center", marginTop: 15, fontSize: 25, fontFamily: 'Boogaloo_400Regular' }}>Ingredientes</Text>
                {receita.ingredientes.map((ingrediente) => (
                    <Text style={{ marginTop: 5, textAlign: "center", fontSize: 15 }}>{ingrediente}</Text>
                ))}
                <Text style={{ color: "#640C0C", textAlign: "center", marginTop: 15, fontSize: 25, fontFamily: 'Boogaloo_400Regular' }}>Instruções</Text>
                {receita.instrucoes.map((instrucao) => (
                    <Text style={{ marginTop: 5, marginLeft: 13, fontSize: 15 }}>{instrucao}</Text>
                ))}
                <Text style={{ color: "#640C0C", textAlign: "center", marginTop: 15, fontSize: 20, fontFamily: 'Boogaloo_400Regular' }}>Tempo de Preparo</Text>
                <Text style={{ textAlign: "center", marginTop: 8, fontSize: 15, fontFamily: 'Boogaloo_400Regular' }}> {receita.tempo_preparo}</Text>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 22,
        textAlign: "center",
        fontFamily: 'Boogaloo_400Regular',
        backgroundColor: "#640C0C",
        color: "#ece57d"
    },
})
