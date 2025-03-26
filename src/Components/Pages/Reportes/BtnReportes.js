import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";

export default function BtnReportes() {
  const [problemDescription, setProblemDescription] = useState("");
  const [problemType, setProblemType] = useState("");
  const [location, setLocation] = useState("");

  const problemTypes = [
    "Seguridad",
    "Mantenimiento",
    "Limpieza",
    "Ruido excesivo",
    "Daño a propiedad",
  ];

  const locations = [
    "Área de albercas",
    "Estacionamiento",
    "Jardines",
    "Salón social",
    "Pasillo principal",
  ];

  const handleSubmit = () => {
    if (!problemDescription || !problemType || !location) {
      Alert.alert("Error", "Por favor completa todos los campos obligatorios");
      return;
    }

    Alert.alert(
      "Reporte enviado",
      `Tipo: ${problemType}\nUbicación: ${location}\n\nGracias por tu reporte.`,
      [
        {
          text: "OK",
          onPress: () => {
            setProblemDescription("");
            setProblemType("");
            setLocation("");
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        Describe el problema que deseas reportar:
      </Text>

      {/* Campo de descripción */}
      <Text style={styles.label}>Descripción del problema:</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Describe detalladamente el problema..."
        multiline
        numberOfLines={4}
        value={problemDescription}
        onChangeText={setProblemDescription}
      />

      {/* Selector de tipo de problema */}
      <Text style={styles.label}>Tipo de problema:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={problemType}
          onValueChange={(itemValue) => setProblemType(itemValue)}
          style={styles.picker}
          dropdownIconColor="#666"
        >
          <Picker.Item label="Selecciona el tipo de problema" value="" />
          {problemTypes.map((type, index) => (
            <Picker.Item key={index} label={type} value={type} />
          ))}
        </Picker>
      </View>

      {/* Selector de ubicación */}
      <Text style={styles.label}>Ubicación del incidente:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
          style={styles.picker}
          dropdownIconColor="#666"
        >
          <Picker.Item label="Selecciona una ubicación" value="" />
          {locations.map((loc, index) => (
            <Picker.Item key={index} label={loc} value={loc} />
          ))}
        </Picker>
      </View>

      {/* Botón para adjuntar foto */}
      <Text style={styles.label}>Adjuntar evidencia:</Text>
      <TouchableOpacity style={styles.attachButton}>
        <Icon name="camera" size={20} color="#3396FE" style={styles.icon} />
        <Text style={styles.attachButtonText}>Adjuntar Foto</Text>
      </TouchableOpacity>

      {/* Botón de enviar */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar Reporte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  multilineInput: {
    height: 120,
    textAlignVertical: "top",
  },
  pickerContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
  },
  attachButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 15,
    marginBottom: 30,
  },
  icon: {
    marginRight: 10,
  },
  attachButtonText: {
    fontSize: 16,
    color: "#3396FE",
  },
  submitButton: {
    backgroundColor: "#3396FE",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    elevation: 3,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
