import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NavBar from "./NavBar";
import HeaderHome from "./HeaderHome";

export default function HomePageResidente() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#3396FE" translucent={true} />
      <HeaderHome />

      <View style={styles.contentWrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.centeredContainer}>
            {/* Botón SOS con icono de exclamación */}
            <Pressable
              style={({ pressed }) => [
                styles.sosButton,
                { transform: [{ scale: pressed ? 0.98 : 1 }] },
              ]}
            >
              <View style={styles.sosContent}>
                <Icon
                  name="exclamation-circle"
                  size={36}
                  color="white"
                  style={styles.sosIcon}
                />
                <Text style={styles.sosText}>S.O.S</Text>
              </View>
            </Pressable>

            {/* Botones de opciones */}
            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.largeButton}>
                <Icon
                  name="money"
                  size={26}
                  color="#3396FE"
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>CUOTAS Y SERVICIOS</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.largeButton}>
                <Icon
                  name="exclamation-triangle"
                  size={26}
                  color="#3396FE"
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>REPORTES DE SEGURIDAD</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.largeButton}>
                <Icon
                  name="qrcode"
                  size={26}
                  color="#3396FE"
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>GENERAR CÓDIGO QR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  contentWrapper: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  centeredContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  sosButton: {
    backgroundColor: "#FF3B30", // Rojo intenso
    width: "100%",
    height: 110, // Aumentado para acomodar el icono
    borderRadius: 12,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sosContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sosIcon: {
    marginRight: 15,
  },
  sosText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  optionsContainer: {
    width: "100%",
  },
  largeButton: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonIcon: {
    marginRight: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
    flex: 1,
  },
});
