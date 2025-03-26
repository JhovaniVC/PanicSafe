import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import NavBar from "../HomeResidente/NavBar";

export default function BitacoraPersonal() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [infoResaltar, setInfoResaltar] = useState("");
  const [contacto, setContacto] = useState("");

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setDate(selectedTime);
    }
  };

  const handleSave = () => {
    Alert.alert("Éxito", "Registro guardado correctamente");
  };

  const formatDate = () => {
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = () => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bitácora de Personal</Text>

        {/* Sección Fecha y Hora con iconos a la izquierda */}
        <View style={styles.datetimeRow}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Icon
                name="calendar"
                size={24}
                color="#007bff"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowTimePicker(true)}>
              <Icon
                name="clock-o"
                size={24}
                color="#007bff"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.datetimeDisplay}>
            <Text style={styles.datetimeText}>{formatDate()}</Text>
            <Text style={styles.datetimeText}>{formatTime()}</Text>
          </View>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            locale="es-ES"
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            display="default"
            onChange={onChangeTime}
            locale="es-ES"
            is24Hour={true}
          />
        )}

        {/* Formulario */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Motivo</Text>
          <TextInput
            style={styles.input}
            value={motivo}
            onChangeText={setMotivo}
            placeholder="Ingrese el motivo"
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={descripcion}
            onChangeText={setDescripcion}
            placeholder="Describa el evento"
            multiline
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>
            Información a resaltar (opcional):
          </Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={infoResaltar}
            onChangeText={setInfoResaltar}
            placeholder="Información importante"
            multiline
          />
        </View>

        {/* Campo de Contacto opcional agregado */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Contacto (opcional):</Text>
          <TextInput
            style={styles.input}
            value={contacto}
            onChangeText={setContacto}
            placeholder="Teléfono de contacto"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar Registro</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavBar />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  datetimeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  iconContainer: {
    flexDirection: "row",
    marginRight: 15,
  },
  icon: {
    marginRight: 15,
  },
  datetimeDisplay: {
    flexDirection: "row",
  },
  datetimeText: {
    fontSize: 16,
    color: "#333",
    marginRight: 15,
  },
  formSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#555",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5,
  },
});
