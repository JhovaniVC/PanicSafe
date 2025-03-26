import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() =>
          navigation.navigate("Residente", { screen: "Notificaciones" })
        }
      >
        <FontAwesome name="bell" size={24} color="#fff" />
        <Text style={styles.tabText}>Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() =>
          navigation.navigate("Residente", { screen: "Configuracion" })
        }
      >
        <FontAwesome name="cog" size={24} color="#fff" />
        <Text style={styles.tabText}>Configuración</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() =>
          navigation.navigate("Residente", { screen: "HomeResidente" })
        }
      >
        <FontAwesome name="home" size={24} color="#fff" />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Residente", { screen: "User" })}
      >
        <FontAwesome name="user" size={24} color="#fff" />
        <Text style={styles.tabText}>User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#000",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#fff",
    marginTop: 4,
  },
});

export default NavBar;
