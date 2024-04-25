import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ButtonDetalhes({ receita }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ borderWidth: 5, borderColor: 'white', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => navigation.navigate("Descricao", { receita: receita })}>
            <Image style={{ width: 290, height: 150, alignItems: "center", marginTop: 50, borderRadius: 10 }}
                source={{ uri: `http://10.0.2.2:3000/assets/${receita.fotos}` }} />
            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 1 }}>{receita.nome}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ECE57D",
        width: "100%",
        borderRadius: 24,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
});
