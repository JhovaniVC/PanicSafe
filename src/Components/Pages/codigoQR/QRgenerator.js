import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRgenerator() {
    const [visitorCount, setVisitorCount] = useState(1);  // Número de visitantes
    const [formData, setFormData] = useState([{ name: '', visitado: '', department: '', arrivalDate: '' }]);  // Datos del formulario
    const [qrValue, setQrValue] = useState('');  // Valor del QR
    const [showModal, setShowModal] = useState(false);  // Control del Modal

    // Función para manejar la generación del código QR
    const generateQR = () => {
        // Verificar si hay visitantes
        if (visitorCount === 0) {
            Alert.alert('Error', 'Por favor, agregue al menos un visitante para generar el QR.', [
                { text: 'OK' },
            ]);
            return; // Detener la ejecución si no hay visitantes
        }

        // Validar que todos los campos estén completos
        for (let i = 0; i < formData.length; i++) {
            const visitor = formData[i];
            if (!visitor.name || !visitor.visitado || !visitor.department || !visitor.arrivalDate) {
                // Si algún campo está vacío, mostrar un mensaje de advertencia
                Alert.alert('Advertencia', 'Por favor, complete todos los campos antes de continuar.', [
                    { text: 'OK' },
                ]);
                return; // Detener la ejecución y no generar el QR
            }
        }

        // Aquí generamos un valor QR con los datos del formulario
        const qrData = formData.map((data, index) => {
            return `Visitante ${index + 1}:\nNombre: ${data.name}\nVisitado: ${data.visitado}\nDepartamento: ${data.department}\nFecha de llegada: ${data.arrivalDate}`;
        }).join('\n\n');

        setQrValue(qrData);
        setShowModal(true);  // Mostrar el modal cuando se genera el QR
    };

    // Función para actualizar los datos del formulario
    const handleInputChange = (index, field, value) => {
        const updatedData = [...formData];
        updatedData[index][field] = value;
        setFormData(updatedData);
    };

    // Función para agregar un nuevo formulario para el siguiente visitante
    const addVisitor = () => {
        setVisitorCount(visitorCount + 1);
        setFormData([
            ...formData,
            { name: '', visitado: '', department: '', arrivalDate: '' }
        ]);
    };

    // Función para eliminar un visitante
    const removeVisitor = (index) => {
        const updatedData = formData.filter((_, i) => i !== index);  // Eliminar el visitante en el índice especificado
        setFormData(updatedData);
        setVisitorCount(visitorCount - 1);  // Reducir el contador de visitantes
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Generar Código QR</Text>

            {/* Formulario */}
            <ScrollView style={styles.formContainer}>
                <Text style={styles.subtitle}>Número de Visitantes: {visitorCount}</Text>

                {formData.map((visitor, index) => (
                    <View key={index} style={styles.formGroup}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre del invitado"
                            value={visitor.name}
                            onChangeText={(text) => handleInputChange(index, 'name', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre del visitado"
                            value={visitor.visitado}
                            onChangeText={(text) => handleInputChange(index, 'visitado', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Número de departamento"
                            value={visitor.department}
                            onChangeText={(text) => handleInputChange(index, 'department', text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Fecha de llegada (YYYY-MM-DD)"
                            value={visitor.arrivalDate}
                            onChangeText={(text) => handleInputChange(index, 'arrivalDate', text)}
                        />

                        {/* Botón para eliminar visitante */}
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => removeVisitor(index)}
                        >
                            <Text style={styles.buttonText}>Quitar Visitante</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                {/* Botón para agregar un nuevo visitante */}
                <TouchableOpacity style={styles.button} onPress={addVisitor}>
                    <Text style={styles.buttonText}>Agregar Visitante</Text>
                </TouchableOpacity>

                {/* Botón de listo */}
                <TouchableOpacity style={styles.button} onPress={generateQR}>
                    <Text style={styles.buttonText}>Listo</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Modal para mostrar el QR */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}  // Cerrar el modal si el usuario presiona atrás
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Tu Código QR</Text>

                        <QRCode value={qrValue} size={200} />

                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setShowModal(false)}  // Cerrar el modal
                        >
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    formContainer: {
        width: '100%',
    },
    formGroup: {
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#1988c3',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    removeButton: {
        backgroundColor: '#f44336',  // Color rojo para el botón de quitar
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fondo oscuro
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#f44336',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
