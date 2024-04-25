import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import Login from "./src/screens/Login";
import Perfil from "./src/screens/Perfil";
import Descricao from "./src/screens/Descricao"


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
