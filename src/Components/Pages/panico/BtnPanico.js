import React from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../HomeResidente/NavBar";

export default function BtnPanico() {
  const navigation = useNavigation();

  const handleSOS = () => {
    // Aquí iría la lógica para enviar la alerta
    Linking.openURL("tel:911"); // Ejemplo: Llamar a emergencias
    // navigation.navigate('Confirmacion'); // Podrías redirigir a una pantalla de confirmación
  };

  return (
    <View style={styles.container}>
      {/* Instrucciones */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>
          Instrucciones para el Botón de Pánico
        </Text>

        <View style={styles.instructionItem}>
          <Text style={styles.instructionNumber}>1.</Text>
          <Text style={styles.instructionText}>
            En caso de emergencia: Si necesitas ayuda, presiona el gran botón
            rojo en el centro de la pantalla.
          </Text>
        </View>

        <View style={styles.instructionItem}>
          <Text style={styles.instructionNumber}>2.</Text>
          <Text style={styles.instructionText}>
            Activar la alarma: Al presionar el botón, se enviará una alerta a
            tus contactos de emergencia.
          </Text>
        </View>

        <View style={styles.instructionItem}>
          <Text style={styles.instructionNumber}>3.</Text>
          <Text style={styles.instructionText}>
            Espera ayuda: Mantén la calma y espera a que llegue la ayuda.
          </Text>
        </View>

        <Text style={styles.footerText}>
          Usa este botón solo en situaciones de emergencia.
        </Text>
      </View>

      {/* Botón SOS */}
      <Pressable
        style={({ pressed }) => [
          styles.sosButton,
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
        onPress={handleSOS}
      >
        <Icon name="exclamation-circle" size={50} color="white" />
        <Text style={styles.sosText}>S.O.S</Text>
      </Pressable>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  instructionsContainer: {
    marginBottom: 40,
  },
  instructionsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  instructionItem: {
    flexDirection: "row",
    marginBottom: 15,
  },
  instructionNumber: {
    fontWeight: "bold",
    color: "#FF3B30",
    marginRight: 8,
  },
  instructionText: {
    flex: 1,
    color: "#555",
    fontSize: 16,
  },
  footerText: {
    marginTop: 20,
    color: "#888",
    fontStyle: "italic",
    textAlign: "center",
  },
  sosButton: {
    backgroundColor: "#FF3B30",
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  sosText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    letterSpacing: 2,
  },
});
