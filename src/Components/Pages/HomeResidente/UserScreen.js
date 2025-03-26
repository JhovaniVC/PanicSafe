import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <FontAwesome name="user-circle" size={80} color="#3396FE" />
        <Text style={styles.profileName}>Pedro Pony</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>No. departamento</Text>
          <Text style={styles.infoValue}>512</Text>
        </View>

        <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>pedropony@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },
  infoContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  infoLabel: {
    fontSize: 16,
    color: "#666",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default UserScreen;
