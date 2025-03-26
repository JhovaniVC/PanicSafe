import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BitacoraPersonal from "./BitacoraPersonal";
import BitacoraEntregas from "./BitacoraEntregas";
import NavBar from "../HomeResidente/NavBar";

export default function MainMenu({ navigation }) {
  // Asegúrate de que navigation esté como prop

  const showAlert = (option) => {
    alert(`Has seleccionado: ${option}`);
  };

  // Función para regresar a la página anterior
  const goBack = () => {
    navigation.goBack(); // Navega a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      {/* Barra de título superior */}
      <View style={styles.topBar}>
        {/* Botón de regresar con un triángulo */}
        <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
          <Icon name="caret-left" size={30} color="#fff" />
        </TouchableOpacity>

        <View style={styles.topBarTextWrapper}>
          <Text style={styles.topBarText}>Bitácora</Text>
        </View>
      </View>

      {/* Botón de Bitácora Personal */}
      <TouchableOpacity
        style={styles.largeButton}
        onPress={() => navigation.navigate("BitacoraPersonal")}
      >
        {" "}
        {/* Asegúrate de que el nombre de la ruta sea correcto */}
        <Text style={styles.buttonText}>Bitácora de Personal</Text>
      </TouchableOpacity>

      {/* Botón de Entregas */}
      <TouchableOpacity
        style={styles.largeButton}
        onPress={() => navigation.navigate("BitacoraEntregas")}
      >
        <Text style={styles.buttonText}>Bitácora de Entregas</Text>
      </TouchableOpacity>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  topBar: {
    width: "100%",
    backgroundColor: "#000000",
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  goBackButton: {
    position: "absolute",
    left: 20,
  },
  topBarTextWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topBarText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 10,
    marginBottom: 0,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  largeButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 100,
    paddingHorizontal: 40,
    borderRadius: 0,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#00000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
