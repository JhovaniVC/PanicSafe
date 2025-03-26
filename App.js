import 'react-native-gesture-handler';  // Asegúrate de agregar esta línea
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRgenerator from './pages/QRgenerator';  // Verifica que la ruta sea correcta
import QRscanner from './pages/QRscanner';  // Verifica que la ruta sea correcta

// Crear el stack navigator
const Stack = createStackNavigator();

// Pantalla principal
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a PanicSafe</Text>
      <Text style={styles.subtitle}>Elige una opción para continuar</Text>
      <StatusBar style="auto" />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('QRgenerator')} // Navegar a QRgenerator
      >
        <Text style={styles.buttonText}>Generar QR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('QRscanner')} // Navegar a QRscanner
      >
        <Text style={styles.buttonText}>Escanear QR</Text>
      </TouchableOpacity>
    </View>
  );
}

// Configuración de navegación
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QRgenerator" component={QRgenerator} />
        <Stack.Screen name="QRscanner" component={QRscanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b3b3b',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#1988c3',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginVertical: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    minWidth: 250,
    minHeight: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
