import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BotonBitacora from './Componentes/BotonBitacora';
import BitacoraPersonal from './Componentes/BitacoraPersonal';
import BitacoraEntregas from './Componentes/BitacoraEntregas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen 
          name="Bitacora" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="BitacoraPersonal" 
          component={BitacoraPersonal} 
          options={{
            title: 'Bitácora de Personal',
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="BitacoraEntregas"
          component={BitacoraEntregas}
          options={{
            title: 'Bitácora de Entregas',
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BotonBitacora navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
