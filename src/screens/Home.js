import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import Imagem from "../assets/logo.png";
import { StatusBar } from 'expo-status-bar';
import usuario from "../assets/usuario.png";
import ButtonDetalhes from "../components/ButtonDetalhes";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Boogaloo_400Regular, useFonts } from '@expo-google-fonts/boogaloo';

export default function Home() {

  let [fontsLoaded] = useFonts({
    Boogaloo_400Regular
  });

  const navigation = useNavigation();

  const [receitaData, setReceitaData] = useState([]);
  const [query, SetQuery] = useState("");

  useEffect(() => {
    fetch("http://10.0.2.2:3000/receitas")
      .then((response) => response.json())
      .then((data) => setReceitaData(data));
  }, []);

  const filteredReceita = query
    ? receitaData.filter((item) =>
      item.nome.toLowerCase().includes(query.toLowerCase())
    )
    : receitaData;


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
      <View style={styles.searchInput}>
          <TextInput 
          placeholder='Pesquisar Receitas'
          placeholderTextColor="#666464"
          value={query}bi
          onChangeText={(text) => SetQuery(text)}/>
      </View>
      <Text style={{ marginTop:5, fontSize: 30, fontFamily: 'Boogaloo_400Regular' }}>Pratos Principais</Text>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor="#640C0C"  />
       

        {filteredReceita.map((receitaData, index) => (
          <ButtonDetalhes  receita={receitaData} key={index} />
        ))}

      </ScrollView>
    </View>
  )

};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    width: 400,
    backgroundColor: "#cccccc",
    borderRadius: 6,
    padding: 10,
    color: "#666464",
    fontSize: 16,
    marginBottom: 20,
    marginTop: 4,
  }
})




