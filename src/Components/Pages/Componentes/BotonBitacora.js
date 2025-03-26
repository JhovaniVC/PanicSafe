import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NavBar from "../HomeResidente/NavBar";

export default function MainMenu({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.safeArea, { flex: 1 }]}>
      {/* Barra de título superior */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
          <Icon name="caret-left" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.topBarTextWrapper}>
          <Text style={styles.topBarText}>Bitácora</Text>
        </View>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        {/* Botón de Bitácora Personal */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BitacoraPersonal")}
        >
          <Text style={styles.buttonText}>Bitácora de Personal</Text>
        </TouchableOpacity>

        {/* Botón de Entregas */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BitacoraEntregas")}
        >
          <Text style={styles.buttonText}>Bitácora de Entregas</Text>
        </TouchableOpacity>
      </View>

      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60, // Ajuste para la barra superior
    marginBottom: 60, // Ajuste para la NavBar
  },
  topBar: {
    width: "100%",
    backgroundColor: "#000000",
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  goBackButton: {
    padding: 10,
    marginLeft: 10,
  },
  topBarTextWrapper: {
    flexGrow: 1,
    alignItems: "center",
  },
  topBarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1988c3",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: "100%",
    maxWidth: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
