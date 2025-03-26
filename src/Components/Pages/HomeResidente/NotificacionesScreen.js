import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const NotificacionesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>

      <ScrollView style={styles.notificationsContainer}>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>
            Nuevo mensaje del administrador
          </Text>
          <Text style={styles.notificationTime}>Hoy, 10:30 AM</Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Pago de cuota recibido</Text>
          <Text style={styles.notificationTime}>Ayer, 2:45 PM</Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>
            Recordatorio: Reunión mañana
          </Text>
          <Text style={styles.notificationTime}>Lunes, 9:15 AM</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  notificationsContainer: {
    flex: 1,
  },
  notificationItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: "#666",
  },
});

export default NotificacionesScreen;
