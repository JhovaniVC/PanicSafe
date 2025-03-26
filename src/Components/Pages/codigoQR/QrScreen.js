import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function QrScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Gestión de Códigos QR</Text>
      <Text style={styles.subtitle}>
        Selecciona una opción para trabajar con códigos QR
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("QRgenerator")}
      >
        <Text style={styles.buttonText}>Generar QR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("QRscanner")}
      >
        <Text style={styles.buttonText}>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3396FE",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#1988c3",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginVertical: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    width: "100%",
    maxWidth: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: "#3396FE",
    borderRadius: 8,
    elevation: 3,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
