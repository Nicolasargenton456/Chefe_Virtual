import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Descricao from "./screens/Descricao";
import Perfil from "./screens/Perfil";


const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Descricao" component={Descricao} />
        </Stack.Navigator>
    );
}
